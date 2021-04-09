<?php

namespace App\Controllers;

use App\Models\Rechnungen;
use App\Models\System;
use App\Models\Users;
use Core\NotificationManager;

class RoutingController extends Controller
{

    function Dashboard()
    {
        echo view('pages/dashboard.twig');
    }

    function Chat()
    {
        echo view('pages/chat.twig', ['partners' => Users::ChatPartner()]);
    }

    function Hersteller()
    {
        echo view('pages/hersteller.twig', ['herstellerlist' => System::getHersteller()]);
    }

    function AdminIndex()
    {
        echo view('pages/admin/home.twig', ['stats' => System::GetStatwerte()]);
    }

    function AdminLink()
    {
        echo view('pages/admin/links/overview.twig');
    }

    function AdminEditUser()
    {
        echo view('pages/admin/users/user_overview.twig', ['users' => Users::GetUsers()]);
    }
    function HerstellerOverview()
    {
        echo view('pages/admin/hersteller/hersteller.twig',  ['herstellerlist' => System::getHersteller()]);
    }

    function Warensystem()
    {
        echo view('pages/admin/warensystem/index.twig');
    }

    function WarensystemAdd()
    {
        echo view('pages/admin/warensystem/add.twig');
    }

    function Upload()
    {
        if ($this->IsPost()) {
            echo view('pages/admin/warensystem/index.twig', ['post' => AdminController::UploadFile($_FILES)]);
        }
    }

    function Produkte()
    {
        echo view('pages/produkte.twig', ['products' => System::GetProducts()]);
    }

    function Logout()
    {
        if (session_destroy()) {
            NotificationManager::ShowTemporaryNotification(
                NotificationManager::TYPE_SUCCESS,
                'Logout war Erfolgreich. Du wirst nun weitergeleitet!'
            );
            echo view('index.twig', ['notifications' => NotificationManager::GetTemporaryNotifications(), 'reload' => '<script>setTimeout(function(){location.href="/"} , 500);</script>']);
        }
    }

    function Login()
    {
        if ($this->IsPost()) {
            if (!empty($_POST['username']) && !empty($_POST['password'])) {
                if (Users::Login([
                    'username' => $_POST['username'],
                    'password' => $this->crypt($_POST['password'])
                ])) {
                    if ($this->RegisterSession([
                        'username' => $_POST['username']
                    ])) {
                        NotificationManager::ShowTemporaryNotification(
                            NotificationManager::TYPE_SUCCESS,
                            'Login war Erfolgreich. Du wirst nun weitergeleitet!'
                        );
                        echo view('index.twig', ['notifications' => NotificationManager::GetTemporaryNotifications(), 'reload' => '<script>setTimeout(function(){location.href="/"} , 500);</script>']);
                    } else {
                        NotificationManager::ShowTemporaryNotification(
                            NotificationManager::TYPE_FAILURE,
                            'Login ist Fehlgeschladen bitte versuche es erneut.'
                        );
                        echo view('index.twig', $this->Notification());
                    }
                } else {
                    NotificationManager::ShowTemporaryNotification(
                        NotificationManager::TYPE_FAILURE,
                        'Account konnte nicht gefunden werden.'
                    );
                    echo view('index.twig', $this->Notification());
                }
            } else {
                NotificationManager::ShowTemporaryNotification(
                    NotificationManager::TYPE_FAILURE,
                    'Account und Passwort dürfen nicht leer sein!'
                );
                echo view('index.twig', $this->Notification());
            }
        } else {
            NotificationManager::ShowTemporaryNotification(
                NotificationManager::TYPE_FAILURE,
                'Fehler im Formular!'
            );
            echo view('index.twig', $this->Notification());
        }
    }

    // Rechnungssystem 
    function Rechnungen()
    {
        echo view('pages/rechnungen/start.twig', ['rechnungen' => Rechnungen::getRechnungen()]);
    }

    function RechnungErstellen()
    {
        if ($this->IsPost()) {
            $post = Rechnungen::erstellen($_POST['rechnungsart']);

            if ($post['return'] == true) {
                $this->redirect('/rechnungen/bearbeiten/' . $post['uuid'], false);
            }
        }
        echo view('pages/rechnungen/start.twig');
    }

    function Berechtigungen()
    {
        echo view('pages/admin/berechtigungen/overview.twig');
    }

    function AdminEditAdd()
    {
        echo view('pages/admin/users/user_add.twig', ['post' => $_POST]);
    }

    function AdminUserAdd()
    {
        echo view('pages/admin/users/user_add.twig', ['post' => $_POST]);
    }

    function AddStateTime(){
        if($this->IsPost()){
            if (!empty($_POST['StateDate']) && $_POST['StateTime'] != '00:00') {
                if (Rechnungen::BaseStatisticValues($_POST)) {
                    NotificationManager::ShowTemporaryNotification(
                        NotificationManager::TYPE_SUCCESS,
                        'Statistikwerte wurde erfolgreich eingetragen.'
                    );
                    echo view('pages/admin/home.twig', ['notifications' => NotificationManager::GetTemporaryNotifications(),'stats' => System::GetStatwerte()]);
                } else {
                    NotificationManager::ShowTemporaryNotification(
                        NotificationManager::TYPE_FAILURE,
                        'Statistikwerte konnten leider niht gespeichert werden.'
                    );
                    echo view('pages/admin/home.twig', ['notifications' => NotificationManager::GetTemporaryNotifications(),'stats' => System::GetStatwerte()]);
                }
            } else {
                NotificationManager::ShowTemporaryNotification(
                    NotificationManager::TYPE_FAILURE,
                    'Die Eingaben dürfen nicht leer sein.'
                );
                echo view('pages/admin/home.twig', ['notifications' => NotificationManager::GetTemporaryNotifications(),'stats' => System::GetStatwerte()]);
            }   
        }
        //echo view('pages/admin/home.twig', ['post' => $_POST]);
    }

    function edittime(){
        $table = '';
        if($this->IsPost()){
            switch($_POST['value']){
                case 'garanite': 
                    $table = 'garantie_time';
                break; 
                case 'mfs': 
                    $table = 'mfs_time'; 
                break;
                case 'aufbau': 
                    $table = 'aufbau_time';
                break;
            }
            System::UpdateStatBaseWerte($_POST, $table);
        }
    }
}