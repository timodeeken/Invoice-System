<?php

use Core\ConfigManager;
use Medoo\Medoo;

class Database
{
    public static function GetHandle()
    {
        return $database = new Medoo([
            'database_type' => 'mysql',
            'database_name' => ConfigManager::GetConfiguration('database.database'),
            'server' => ConfigManager::GetConfiguration('database.host'),
            'username' => ConfigManager::GetConfiguration('database.user'),
            'password' => ConfigManager::GetConfiguration('database.password')
        ]);
    }
}
