<?php

namespace App\Models;

use App\Controllers\Controller;
use Database;

class Rechnungen extends Model
{
    public static function erstellen($art)
    {
        $uuid = uniqid();
        $result = Database::GetHandle()->insert('tbl_rechnungen', [
            'uuid' => $uuid,
            'art' => $art,
            'bearbeiter' => Controller::RealName(),
            'status' => 1,
            'rechnungsdatum' => date('Y-m-d'),
            'leistungsdatum' => date('Y-m-d'),
            'land' => 'DE'
        ]);

        $result_details = Database::GetHandle()->insert('tbl_rechnungen_details', [
            'uuid' => $uuid,
            'payment_status' => 0
        ]);

        if ($result && $result_details) {
            return [
                'return' => true,
                'uuid' => $uuid
            ];
        }
        return [
            'return' => false
        ];
    }

    public static function getRechnungen()
    {
        return Database::GetHandle()->select('tbl_rechnungen', '*', [
            'status' => 1,
            'ORDER' => [
                'id' => 'DESC'
            ]
        ]);
    }

    public static function Rechnungsart($uuid)
    {
        return Database::GetHandle()->get('tbl_rechnungen', 'art', [
            'uuid' => $uuid
        ]);
    }

    public static function dates($uuid)
    {
        return Database::GetHandle()->get('tbl_rechnungen', [
            'rechnungsdatum',
            'leistungsdatum'
        ], [
            'uuid' => $uuid
        ]);
    }

    public static function updateData($data = [])
    {
        Database::GetHandle()->update('tbl_rechnungen', [
            $data['key'] => $data['value']
        ], [
            'uuid' => $data['uuid']
        ]);
    }

    public static function getDates($uuid)
    {
        return Database::GetHandle()->select('tbl_rechnungen', '*', [
            'uuid' => $uuid
        ]);
    }

    public static function UpdateVehicel($data)
    {
        Database::GetHandle()->update('tbl_rechnungen_details', [
            $data['key'] => $data['value']
        ], [
            'uuid' => $data['uuid']
        ]);
    }

    public static function GetDetails($uuid)
    {
        return Database::GetHandle()->select('tbl_rechnungen_details', '*', [
            'uuid' => $uuid
        ]);
    }

    public static function SucheArbeitsleistung($data = [])
    {
        $datas = Database::GetHandle()->select('tbl_arbeitspositionen', [
            'id',
            'beschreibung',
        ], [
            'beschreibung[~]' => $data['value']
        ]);
        return json_encode($datas);
    }

    public static function GetArbeitsleistung($uuid)
    {
        return Database::GetHandle()->select('tbl_rechnungen_arbeitsleistung', '*', [
            'rechnung_uuid' => $uuid
        ]);
    }

    public static function AddArbeitsleistung($data = [])
    {
        $uuid = uniqid();
        $getData = Database::GetHandle()->get('tbl_arbeitspositionen', [
            'beschreibung',
            'art',
            'wert'
        ], [
            'id' => $data['arbeitsleistung']
        ]);

        $result = Database::GetHandle()->insert('tbl_rechnungen_arbeitsleistung', [
            'uuid' => $uuid,
            'beschreibung' => $getData['beschreibung'],
            'rechnung_uuid' => $data['uuid'],
            'art' => $getData['art'],
            'wert' => $getData['wert']
        ]);

        if ($result == true) {
            return json_encode([
                'status' => true,
                'uuid' => $uuid,
                'beschreibung' => $getData['beschreibung'],
                'art' => $getData['art'],
                'wert' => $getData['wert']
            ]);
        } else {
            return json_encode([
                'status' => false
            ]);
        }
    }

    public static function UpdateArName($post)
    {
        $result = Database::GetHandle()->update('tbl_rechnungen_arbeitsleistung', [
            'beschreibung' => $post['NewName']
        ], [
            'uuid' => $post['uuid']
        ]);

        if ($result == true) {
            return json_encode([
                'status' => true
            ]);
        }
        return json_encode([
            'status' => false
        ]);
    }

    public static function RemoveAr($post)
    {
        $result = Database::GetHandle()->delete('tbl_rechnungen_arbeitsleistung', [
            'uuid' => $post['uuid']
        ]);

        if ($result == true) {
            return json_encode([
                'status' => true
            ]);
        }
        return json_encode([
            'status' => false
        ]);
    }

    public static function SumArbeitsleistung($uuid)
    {
        $data[] = Database::GetHandle()->select('tbl_rechnungen_arbeitsleistung', [
            'uuid',
            'stk',
            'zeit',
            'art',
            'wert'
        ], [
            'rechnung_uuid' => $uuid
        ]);

        return json_encode($data);
    }

    public static function UpdateArZeitPosition($post)
    {
        $result = Database::GetHandle()->update('tbl_rechnungen_arbeitsleistung', [
            'zeit' => $post['value']
        ], [
            'uuid' => $post['uuid']
        ]);

        if ($result == true) {
            return json_encode([
                'status' => true
            ]);
        }
        return json_encode([
            'status' => false
        ]);
    }

    public static function UpdateArStkPosition($post)
    {
        $result = Database::GetHandle()->update('tbl_rechnungen_arbeitsleistung', [
            'stk' => $post['value']
        ], [
            'uuid' => $post['uuid']
        ]);

        if ($result == true) {
            return json_encode([
                'status' => true
            ]);
        }
        return json_encode([
            'status' => false
        ]);
    }

    public static function UpdateArWertPosition($post)
    {
        $result = Database::GetHandle()->update('tbl_rechnungen_arbeitsleistung', [
            'wert' => $post['value']
        ], [
            'uuid' => $post['uuid']
        ]);

        if ($result == true) {
            return json_encode([
                'status' => true
            ]);
        }
        return json_encode([
            'status' => false
        ]);
    }

    public static function SumArCost($uuid)
    {

        $data = Database::GetHandle()->select('tbl_rechnungen_arbeitsleistung', [
            'id',
            'stk',
            'zeit',
            'wert',
            'art'
        ], [
            'rechnung_uuid' => $uuid
        ]);

        return json_encode($data);
    }


    public static function DeleteInvoice($uuid)
    {
        $result1 = Database::GetHandle()->delete('tbl_rechnungen_arbeitsleistung', [
            'rechnung_uuid' => $uuid
        ]);

        $result2 = Database::GetHandle()->delete('tbl_rechnungen_details', [
            'uuid' => $uuid
        ]);

        $result3 = Database::GetHandle()->delete('tbl_rechnungen', [
            'uuid' => $uuid
        ]);

        if ($result1 && $result2 && $result3) {
            return true;
        }
        return false;
    }

    public static function BaseStatisticValues($data = []){
        $uuid = uniqid(); 

        $stats = Database::GetHandle()->insert('tbl_statistic_base', [
            'uuid' => $uuid,
            'date' => $data['StateDate'],
            'time' => $data['StateTime'],
            'invoice_time' => '00:00:00',
            'mfs_time' => '00:00:00',
            'aufbau_time' => '00:00:00',
            'garantie_time' => '00:00:00'
        ]); 

        if($stats){
            return true;
        }
        return false;
    }
}