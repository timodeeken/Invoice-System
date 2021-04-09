<?php

namespace App\Controllers;

use App\Models\System;

class HomeController extends Controller
{
    public static function dNav()
    {
        return System::GetdNav();
    }

    public static function SubMenu($uuid)
    {
    }
}
