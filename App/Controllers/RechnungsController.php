<?php

namespace App\Controllers;

use App\Models\Rechnungen;

class RechnungsController extends Controller
{

    public static function bearbeiten($uuid)
    {
        echo view('pages/rechnungen/bearbeiten.twig', [
            'uuid' => $uuid,
            'art' => Rechnungen::Rechnungsart($uuid),
            'dates' => Rechnungen::dates($uuid),
            'kunde' => Rechnungen::getDates($uuid)[0],
            'details' => Rechnungen::GetDetails($uuid)[0],
            'arbeitsleistungen' => Rechnungen::GetArbeitsleistung($uuid),
            'sum' => Rechnungen::SumArbeitsleistung($uuid)
        ]);
    }

    function update()
    {
        if ($this->IsPost()) {
            Rechnungen::updateData($_POST);
        }
    }

    function UpdateVehicel()
    {
        if ($this->IsPost()) {
            Rechnungen::UpdateVehicel($_POST);
        }
    }

    function AddArbeitsleistung()
    {
        if ($this->IsPost()) {
            echo Rechnungen::AddArbeitsleistung($_POST);
        }
    }

    function UpdateArName()
    {
        if ($this->IsPost()) {
            echo Rechnungen::UpdateArName($_POST);
        }
    }

    function RemoveAr()
    {
        if ($this->IsPost()) {
            echo Rechnungen::RemoveAr($_POST);
        }
    }

    function Search()
    {
        if ($this->IsPost()) {
            switch ($_POST['art']) {
                case 1:
                    echo Rechnungen::SucheArbeitsleistung($_POST);
                    break;

                case 2:
                    break;

                case 3:
                    break;
            }
        }
    }

    function UpdateArPositon()
    {
        if ($this->IsPost()) {
            switch ($_POST['art']) {
                case 1:
                    echo Rechnungen::UpdateArZeitPosition($_POST);
                    break;
                case 2:
                    echo Rechnungen::UpdateArStkPosition($_POST);
                    break;
                case 3:
                    echo Rechnungen::UpdateArWertPosition($_POST);
                    break;
            }
        }
    }

    function GetFullArCost()
    {
        if ($this->IsPost()) {
            echo Rechnungen::SumArCost($_POST['uuid']);
        }
    }

    public static function delete($uuid)
    {
        if (!empty($uuid)) {
            if (Rechnungen::DeleteInvoice($uuid)) {
                header('Location: ' . '/rechnungen', true, false ? 301 : 302);
            }
        }
    }
}
