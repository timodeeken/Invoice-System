<?php

namespace App\Controllers;

use App\Models\Users;
use Core\NotificationManager;
use Database;

class ChatController extends Controller
{

    public static function GetHistory($uuid)
    {
        echo view('pages/chat.twig', ['partners' => Users::ChatPartner(), 'PartnerStats' => Users::GetPartner($uuid), 'myUUID' => Users::MyUUID()]);
    }

    function GetChat()
    {
        echo Users::GetChat($_POST['myUUID'], $_POST['pUUID']);
    }

    public static function SendMessage()
    {
        if (isset($_POST)) {
            if (!empty($_POST['editor'])) {
                if (Users::SaveMessage($_POST)) {
                    NotificationManager::ShowTemporaryNotification(
                        NotificationManager::TYPE_SUCCESS,
                        'Nachricht wurde versendet.'
                    );
                    echo view('pages/chat.twig', ['notifications' => NotificationManager::GetTemporaryNotifications(), 'partners' => Users::ChatPartner(), 'PartnerStats' => Users::GetPartner($_POST['pUUID']), 'myUUID' => Users::MyUUID()]);
                } else {
                    NotificationManager::ShowTemporaryNotification(
                        NotificationManager::TYPE_FAILURE,
                        'Nachricht wurde nicht versendet.'
                    );
                    echo view('pages/chat.twig', ['notifications' => NotificationManager::GetTemporaryNotifications(), 'partners' => Users::ChatPartner(), 'PartnerStats' => Users::GetPartner($_POST['pUUID']), 'myUUID' => Users::MyUUID()]);
                }
            } else {
                NotificationManager::ShowTemporaryNotification(
                    NotificationManager::TYPE_FAILURE,
                    'Du kannst keinen leeren Text verschicken'
                );
                echo view('pages/chat.twig', ['notifications' => NotificationManager::GetTemporaryNotifications(), 'partners' => Users::ChatPartner(), 'PartnerStats' => Users::GetPartner($_POST['pUUID']), 'myUUID' => Users::MyUUID()]);
            }
        } else {
            NotificationManager::ShowTemporaryNotification(
                NotificationManager::TYPE_FAILURE,
                'Fehler im Forumlar.'
            );
            echo view('pages/chat.twig', ['notifications' => NotificationManager::GetTemporaryNotifications(), 'partners' => Users::ChatPartner(), 'PartnerStats' => Users::GetPartner($_POST['pUUID']), 'myUUID' => Users::MyUUID()]);
        }
    }
}
