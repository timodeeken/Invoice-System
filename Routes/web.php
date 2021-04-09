<?php

// Web routes for your app

use App\Controllers\AdminController;
use App\Controllers\ChatController;
use App\Controllers\RechnungsController;
use App\Controllers\UsersController;

$routes->get('/', 'RoutingController@Dashboard');
$routes->get('/chat', 'RoutingController@Chat');
$routes->get('/logout', 'RoutingController@Logout');
$routes->get('/hersteller', 'RoutingController@Hersteller');
$routes->get('/produkte', 'RoutingController@Produkte');

// Rechnungssystem alle Positionen
$routes->get('/rechnungen', 'RoutingController@Rechnungen');
$routes->post('/api/rechnungen/UpdateCustomer', 'RechnungsController@update');
$routes->post('/api/rechnungen/UpdateVehicel', 'RechnungsController@UpdateVehicel');
$routes->post('/api/rechnungen/Search',  'RechnungsController@Search');
$routes->post('/api/rechnungen/AddArbeitsleistung', 'RechnungsController@AddArbeitsleistung');
$routes->post('/api/rechnungen/UpdateArName', 'RechnungsController@UpdateArName');
$routes->post('/api/rechnungen/RemoveAr', 'RechnungsController@RemoveAr');
$routes->post('/api/rechnungen/UpdateArPosition', 'RechnungsController@UpdateArPositon');
$routes->post('/api/rechnungen/GetFullArCost', 'RechnungsController@GetFullArCost');
$routes->get('/rechnungen/bearbeiten', function ($uuid) {
    RechnungsController::bearbeiten($uuid);
});
$routes->get('/rechnungen/delete', function ($uuid) {
    RechnungsController::delete($uuid);
});
$routes->post('/api/rechnungen/erstellen', 'RoutingController@RechnungErstellen');
$routes->post('/api/admin/edittime', 'RoutingController@edittime');
$routes->post('/admin/warensystem', 'RoutingController@Upload');
$routes->post('/admin/user/add', 'AdminController@AdminUserAdd');
$routes->post('/admin/stats/add', 'RoutingController@AddStateTime');
// Admin 
$routes->get('/admin/start', 'RoutingController@AdminIndex');

$routes->get('/admin/link', 'RoutingController@AdminLink');
$routes->get('/admin/user', 'RoutingController@AdminEditUser');
$routes->get('/admin/user/add', 'RoutingController@AdminEditAdd');
$routes->get('/admin/warensystem', 'RoutingController@Warensystem');
$routes->get('/admin/warensystem/add', 'RoutingController@WarensystemAdd');
$routes->get('/admin/hersteller', 'RoutingController@HerstellerOverview');
$routes->get('/admin/auth', 'RoutingController@Berechtigungen');

$routes->get('/admin/user/edit', function ($uuid) {
    UsersController::EditUser($uuid);
});
$routes->get('/admin/hersteller/edit', function ($id) {
    AdminController::EditHersteller($id);
});
$routes->post('/admin/hersteller/edit', function ($id) {
    AdminController::SaveHersteller($id);
});




// Chat System
$routes->get('/chat/history', function ($uuid) {
    ChatController::GetHistory($uuid);
});
$routes->post('/chat/history', function ($uuid) {
    ChatController::SendMessage($uuid);
});


$routes->post('/', 'RoutingController@Login');
$routes->post('/api/chat/getchat', 'ChatController@GetChat');


$routes->notFound(function () {
    echo view('pages/404.twig');
});