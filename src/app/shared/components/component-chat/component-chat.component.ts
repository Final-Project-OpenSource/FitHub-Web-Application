import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButton, MatIconButton} from "@angular/material/button";
import {Router} from "@angular/router";
import {MatFormField, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {UserService} from "../../../services/users/users.service";
import {ChatsService} from "../../../services/chats/chats.service";
import {catchError, combineLatest, map, Observable, of, startWith} from "rxjs";
import {
  MatList,
  MatListItem,
  MatListOption,
  MatListSubheaderCssMatStyler,
  MatSelectionList
} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {MatIcon} from "@angular/material/icon";
import {MessagesService} from "../../../services/messages/messages.service";

@Component({
  selector: 'app-component-chat',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatOption,
    CommonModule,
    MatList,
    MatListSubheaderCssMatStyler,
    MatListItem,
    MatDivider,
    MatListOption,
    MatSelectionList,
    MatIconButton,
    MatSuffix,
    MatIcon,
    FormsModule
  ],
  templateUrl: './component-chat.component.html',
  styleUrl: './component-chat.component.css'
})

export class ComponentChatComponent implements OnInit {
  searchControl = new FormControl();
  chatListControl = new FormControl();
  data: any[] = [];
  userChats: any[] = [];
  chatsUsers: any[] = [];
  chatsMessages: any[] = [];
  filteredData: any[] = [];
  searchText: string = '';
  user = '';
  currentChat = '';
  messageContent: string = '';
  currentChatUser = 'Message';
  currentChatReceivingUser = '';
  chatData: any ={
    id: this.currentChat,
    chatUser: this.user,
  };
  currentChatData$: Observable<any> = of(null);
  selectedChat$ = combineLatest()

  constructor(private userService: UserService, private chatServices: ChatsService, private messageService: MessagesService, private router: Router) { this.user='2' }

  // Redirige a la página de inicio del miembro cuando se hace clic en el dashboard
  onDashboardClick(): void {
    this.router.navigate(['member-dashboard']);
  }

// Establece el chat actual y el usuario del chat seleccionado
  setCurrentChat(user: any, index: number): void {
    this.currentChat = this.userChats[index].id; // Establece el chat actual
    this.currentChatUser = `${user.firstname} ${user.lastname}`; // Establece el usuario del chat actual
    this.currentChatReceivingUser = `${user.id}`;
  }

// Obtiene los usuarios
  getUsers(): void {
    for (let i = 1; i <= 10; i++) { // Se asume que hay 10 usuarios
      this.userService.getUsersbyId(i).subscribe( // Obtiene cada usuario por su ID
        res => {
          const userData = { // Crea un objeto con los datos del usuario
            id: i,
            firstname: res.firstname,
            lastname: res.lastname
          };
          this.data.push(userData); // Agrega el usuario al array de datos
          console.log(userData); // Muestra los datos del usuario en la consola
          this.filteredData = [...this.data]; // Actualiza el array de datos filtrados
        },
        error => {
          console.log(error); // Maneja los errores de la solicitud
        }
      );
    }
  }

  // Aplica un filtro a los datos basado en el valor ingresado en un input
  applyFilter(event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Obtiene el elemento de entrada del evento
    const filteredValue = inputElement.value.trim().toLowerCase(); // Obtiene el valor del input filtrado y en minúsculas

    // Filtra los datos en base al valor ingresado
    this.filteredData = this.data.filter(item =>
      (item.firstname.toLowerCase().includes(filteredValue) || // Filtra por nombre
        item.lastname.toLowerCase().includes(filteredValue)) // Filtra por apellido
    );
  }

  sendMessage() {
    //const receivingUserId = 456; // Reemplaza con el ID del usuario que recibe el mensaje

    if (this.messageContent.trim() !== '') {
      this.messageService.postMessage(
        this.currentChat,
        this.user,
        this.currentChatReceivingUser,
        this.messageContent
      ).subscribe(
        response => {
          console.log('Mensaje enviado con éxito', response);
          // Manejar la respuesta del servidor si es necesario
          // Por ejemplo, podrías limpiar el campo de texto después de enviar el mensaje
          this.messageContent = '';
        },
        error => {
          console.error('Error al enviar mensaje', error);
          // Manejar errores si la solicitud falla
        }
      );
    } else {
      console.log('El mensaje está vacío');
      // Manejar el caso donde el usuario intenta enviar un mensaje vacío
    }
  }

// Obtiene los chats del usuario por su ID
  getChats(id: any): void {
    this.chatServices.getUserChatbyId(id).subscribe(
      (results: any[]) => {
        // Concatena los resultados de las dos llamadas HTTP
        this.userChats = results[0].concat(results[1]);
        console.log('Chats del usuario:', this.userChats);

        // Llama a getChatsUser después de que se llenen los chats
        this.getChatsUser();
      },
      error => {
        console.error('Error al obtener los chats:', error); // Maneja los errores de la solicitud
      }
    );
  }

  // Obtiene los usuarios asociados a los chats del usuario actual
  getChatsUser(): void {
    this.chatsUsers = []; // Inicializa el arreglo de usuarios de los chats

    // Recorre todos los chats del usuario actual
    for (let i = 0; i < this.userChats.length; i++) {
      const chat = this.userChats[i]; // Obtiene el chat actual

      let userIdToFetch: any;
      // Determina el ID del usuario a recuperar basado en el chat actual
      if (chat.userid1 == this.user) {
        userIdToFetch = chat.userid2;
      } else {
        userIdToFetch = chat.userid1;
      }

      // Obtiene los detalles del usuario asociado al chat actual
      // Se llama a getUsersbyId solo una vez por cada usuario
      this.userService.getUsersbyId(userIdToFetch).subscribe(
        res => {
          // Crea un objeto con los detalles del usuario
          const userData = {
            id: userIdToFetch, // Utiliza el ID del usuario en lugar del índice del bucle
            firstname: res.firstname,
            lastname: res.lastname
          };
          this.chatsUsers.push(userData); // Agrega los detalles del usuario al arreglo de usuarios de los chats
          console.log(userData); // Muestra los detalles del usuario en la consola
        },
        error => {
          console.log(error); // Maneja los errores de la solicitud
        }
      );
    }
  }

  // Obtiene la información del chat actual
  getCurrentChat(): Observable<any> {
    return this.chatServices.getChatbyId(this.currentChat).pipe(
      map((res: any) => {
        // Determina el usuario del chat actual
        if (res.userid1 === this.user) {
          this.chatData = {
            id: this.currentChat,
            chatUser: res.userid2

          };
        } else {
          this.chatData = {
            id: this.currentChat,
            chatUser: res.userid1
          };
        }
        console.log(this.chatData); // Muestra los datos del chat en la consola
        return this.chatData.chatUser; // Devuelve el usuario del chat
      }),
      catchError(error => {
        console.log(error); // Maneja los errores de la solicitud
        throw error;
      })
    );
  }

  // Obtiene los mensajes del chat actual
  getMessagebyCurrentChat(): void {
    this.messageService.getMessagebyChatId(this.currentChat).subscribe(
      (messages: any) => {
        console.log(messages); // Aquí puedes manejar la respuesta del servicio de mensajes
        this.chatsMessages = messages; // Guarda los mensajes en el arreglo
      },
      (error: any) => {
        console.error(error); // Manejo de errores
      }
    );
  }

  goBack(): void {
    window.history.back();
  }


  ngOnInit(): void {
    this.getUsers(); // Obtiene los usuarios al inicializar el componente
    this.searchControl.valueChanges.subscribe(value => {
      this.applyFilter(value); // Aplica un filtro cuando el valor del control de búsqueda cambia
    });
    this.getChats(this.user); // Obtiene los chats del usuario actual al inicializar el componente
  }
}
