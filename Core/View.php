<?php

use App\Controllers\Controller;
use App\Controllers\HomeController;
use Core\ConfigManager;

interface IView
{
    public static function init(): void;

    public static function render($file, $vars = []): string;

    public static function addGlobalVar($key, $value): void;
}

class View implements IView
{
    private static $engine = null;

    public static function init(): void
    {
        $loader = new \Twig\Loader\FilesystemLoader(ROOT . "/" . ConfigManager::GetConfiguration('website.view') . "/");
        $twig = new \Twig\Environment($loader, [
            'debug' => true
        ]);
        $twig->addExtension(new \Twig\Extension\DebugExtension());
        $twig->addGlobal('IsUser', Controller::IsUser());
        $twig->addGlobal('Username', Controller::Username());
        $twig->addGlobal('Realname', Controller::RealName());
        $twig->addGlobal('dNav', HomeController::dNav());
        $twig->addFilter(new \Twig\TwigFilter('SubMenu', function ($uuid) {
            return HomeController::SubMenu($uuid);
        }));
        $twig->addFunction(new \Twig\TwigFunction(
            'sumZeit',
            function ($sum1, $sum2) {
                $position = (Controller::decimalHours($sum1)) * $sum2;
                return number_format($position, 2, ',', '.');
            }
        ));
        $twig->addFunction(new \Twig\TwigFunction(
            'sumStk',
            function ($sum1, $sum2) {
                $position = ($sum1) * $sum2;
                return number_format($position, 2, ',', '.');
            }
        ));
        $twig->addFunction(new \Twig\TwigFunction(
            'Rechnungsart',
            function ($key) {
                switch ($key) {
                    case 1:
                        return 'Werkstatt Rechnung';
                        break;
                    case 2:
                        return 'Teile Rechnung';
                        break;
                    case 3:
                        return 'Angebot';
                        break;
                    case 4:
                        return 'Storno';
                        break;
                }
            }
        ));
        self::$engine = $twig;
    }

    public static function render($file, $vars = []): string
    {
        $template = self::$engine->load($file);
        return $template->render($vars);
    }

    public static function addGlobalVar($key, $value): void
    {
        self::$engine->addGlobal($key, $value);
    }
}