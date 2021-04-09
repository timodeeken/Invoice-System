<?php

namespace App\Controllers;

use App\Models\System;
use Core\NotificationManager;


class AdminController extends Controller
{


    public static function EditHersteller($id)
    {
        echo view('pages/admin/hersteller/edit.twig', ['hersteller' => System::GetHerstellerByID($id)]);
    }

    public static function SaveHersteller($id)
    {
        if (System::SaveHersteller($id, $_POST)) {
            NotificationManager::ShowTemporaryNotification(
                NotificationManager::TYPE_SUCCESS,
                'Hersteller wurde gespeichert'
            );
            echo view('pages/admin/hersteller/edit.twig', ['notifications' => NotificationManager::GetTemporaryNotifications(), 'hersteller' => System::GetHerstellerByID($id)]);
        } else {
            NotificationManager::ShowTemporaryNotification(
                NotificationManager::TYPE_FAILURE,
                'Hersteller konnte nicht gespeichert werden.'
            );
            echo view('pages/admin/hersteller/edit.twig', ['notifications' => NotificationManager::GetTemporaryNotifications(), 'hersteller' => System::GetHerstellerByID($id)]);
        }
    }

    public static function UploadFile($file)
    {
        $output = [0];
        $file = fopen($file['fileToUpload']['tmp_name'], 'r');
        while (($line = fgetcsv($file)) !== FALSE) {
            $ex = explode(';', $line[0]);
            System::ImportLiquiMoly([
                'artnr' => $ex[1],
                'ean' => $ex[2],
                'name' => $ex[4],
                'gebinde' => $ex[5],
                'gebinde1' =>  $ex[6],
                'stk' => $ex[8],
                'ek' => $ex[12],
                'vk' => $ex[17]
            ]);
        }
        fclose($file);
        return $output;
    }
}
