import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
interface Componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private alertController: AlertController,
              private navController: NavController) {}

  async Consulta(){
    const alert = await this.alertController.create({
      header: 'Cerrar Sesión',
      message: 'Está segur@ de Cerrar Sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () =>{
            this.navController.navigateRoot('login');
          }
        },
      ],
      
    });

    console.log('ingresado');
    localStorage.removeItem('ingresado');

    await alert.present();

    const { role } = await alert.onDidDismiss();
  };

  componentes: Componente[]=[

    {
      icon: 'home-outline',
      name: 'Menu',
      redirecTo: '/home',
    },

    {
      icon: 'person-outline',
      name: 'Perfil Usuario',
      redirecTo: '/perfil-usuario',
    },

    {
      icon: 'bag-handle-outline',
      name: 'Carrito',
      redirecTo: '/carrito',
    },

    {
      icon: 'list-outline',
      name: 'Historial Pedidos',
      redirecTo: '/historial-pedidos',
    },

    
    {
      icon: 'chatbubbles-outline',
      name: 'Sugerencias',
      redirecTo: '/sugerencias',
    },


  ];
}