<?php

namespace App\Controllers;

use App\Models\Users;
use Core\ConfigManager;
use Core\NotificationManager;

abstract class Controller
{
    public function before()
    {
        // method called before controller execution
    }

    public function Notification()
    {
        return ['notifications' => NotificationManager::GetTemporaryNotifications()];
    }

    public static function Username()
    {
        if (self::IsUser()) {
            return $_SESSION['username'];
        }
        return '';
    }

    public static function decimalHours($time)
    {
        $hms = explode(":", $time);
        return ($hms[0] + ($hms[1]/60) + ($hms[2]/3600));
    }

    public static function RealName()
    {
        if (self::IsUser()) {
            return Users::RealName($_SESSION['username']);
        }
        return '';
    }

    public static function IsUser()
    {
        if (!empty($_SESSION['username'])) {
            return true;
        }
        return false;
    }

    public function IsPost()
    {
        if (isset($_POST)) {
            return true;
        }
        return false;
    }

    public function crypt($string)
    {
        return sha1(ConfigManager::GetConfiguration('security.salt') . $string);
    }

    public function RegisterSession($data = [])
    {
        if (isset($data['username'])) {
            $_SESSION['username'] = $data['username'];
            return true;
        }
        return false;
    }

    public function redirect($location, $permanent = false)
    {
        header('Location: ' . $location, true, $permanent ? 301 : 302);
        exit;
    }

    public function after()
    {
        // method called at the end of controller execution
    }

    public function __destruct()
    {
        $this->after();
    }
}