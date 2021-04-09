<?php

namespace App\Models;

use App\Controllers\Controller;
use Database;
use Symfony\Component\VarDumper\Cloner\Data;

class Users extends Model
{

    public static function Login($data = [])
    {
        if (Database::GetHandle()->has('tbl_account', [
            "AND" => [
                "username" => $data['username'],
                "password" => $data['password']
            ]
        ])) {
            return true;
        }
        return false;
    }

    public static function RealName($username)
    {
        return Database::GetHandle()->get('tbl_account', 'name', [
            'username' => $username
        ]);
    }

    public static function ChatPartner()
    {
        return Database::GetHandle()->select(
            'tbl_account',
            [
                'uuid',
                'username',
                'name',
                'status'
            ],
            [
                'username[!]' => Controller::Username()
            ]
        );
    }

    public static function GetPartner($uuid)
    {
        return Database::GetHandle()->select('tbl_account', [
            'uuid',
            'name',
            'status'
        ], [
            'uuid' => $uuid
        ]);
    }

    public static function MyUUID()
    {
        return Database::GetHandle()->get('tbl_account', 'uuid', [
            'username' => Controller::Username()
        ]);
    }

    public static function GetChat($myUUID, $pUUID)
    {
        $chat = Database::GetHandle()->select('tbl_chat', '*', [
            "OR #Actually, this comment feature can be used on every AND and OR relativity condition" => [
                "AND #the first condition" => [
                    "message_from" => $pUUID,
                    "message_to" => $myUUID
                ],
                "AND #the second condition" => [
                    "message_from" => $myUUID,
                    "message_to" => $pUUID
                ]
            ],
            "ORDER" => [
                "sending_time" => 'DESC'
            ]
        ]);
        return json_encode($chat, JSON_UNESCAPED_UNICODE);
    }

    public static function SaveMessage($data = [])
    {
        if (Database::GetHandle()->insert('tbl_chat', [
            'message_from' => $data['myUUID'],
            'message_to' => $data['pUUID'],
            'message' => $data['editor'],
            'sending_time' => date('Y-m-d H:i:s'),
            'checked' => 0
        ])) {
            return true;
        }
        return false;
    }


    public static function GetUsers()
    {
        return Database::GetHandle()->select('tbl_account', '*');
    }

    public static function GetUser($uuid)
    {
        return Database::GetHandle()->select('tbl_account', '*', [
            'uuid' => $uuid
        ]);
    }
}
