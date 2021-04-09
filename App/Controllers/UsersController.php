<?php

namespace App\Controllers;

use App\Models\Users;

class UsersController extends Controller
{


    public static function EditUser($uuid)
    {
        echo view('pages/admin/users/user_edit.twig', ['users' => Users::GetUser($uuid)]);
    }
}
