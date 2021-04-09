<?php

namespace App\Models;

use App\Controllers\Controller;
use Database;
use Symfony\Component\VarDumper\Cloner\Data;

class System extends Model
{
    public static function getHersteller()
    {
        return Database::GetHandle()->select('tbl_hersteller', '*');
    }

    public static function GetHerstellerByID($id)
    {
        return Database::GetHandle()->select('tbl_hersteller', '*', [
            'id' => $id
        ]);
    }

    public static function GetProducts()
    {
        return Database::GetHandle()->select('tbl_products', '*');
    }

    public static function ImportLiquiMoly($data)
    {
        Database::GetHandle()->insert('tbl_products', [
            'name' => 'Liqui Moly ' . $data['name'],
            'inhalt' => $data['gebinde'],
            'menge' => $data['gebinde1'],
            'EAN' => $data['ean'],
            'lieferant1' => 'Liqui Moly',
            'bestellnr1' => $data['artnr'],
            'ek1_netto' => $data['ek'],
            'vk1_brutto' => $data['vk']
        ]);
    }

    public static function GetdNav()
    {
        return Database::GetHandle()->select('tbl_link_nav', '*');
    }


    public static function SaveHersteller($id, $post)
    {
        $result = Database::GetHandle()->update('tbl_hersteller', [
            'name' => $post['name']
        ], [
            'id' => $id
        ]);

        if ($result) {
            return true;
        }
        return false;
    }
    
    public static function GetStatwerte()
    {
        return Database::GetHandle()->select('tbl_statistic_base', '*', [
            'ORDER' => [
                'date' => 'DESC',
                'id' => 'DESC'
            ]
        ]);
    }

    public static function UpdateStatBaseWerte($data = [], $spalte = ''){
        $result = Database::GetHandle()->update('tbl_statistic_base', [
            $spalte => $data['zeit']
        ], [
            'uuid' => $data['uuid']
        ]);

        if($result){
            echo true;
        } else {
            echo false;
        }
    }
}