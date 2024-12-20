<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <title>{{ config('app.name', 'Calendar App') }}</title>

  <!-- Fonts -->
  <link rel="dns-prefetch" href="//fonts.bunny.net">
  <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
  <link
    href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Noto+Sans+JP:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet">


  <!-- Scripts -->
  @viteReactRefresh
  @if (Request::is('login') || Request::is('register'))
    @vite(['resources/css/auth.css', 'resources/js/auth.js'])
  @else
    @vite(['resources/css/app.css', 'resources/ts/app.tsx'])
  @endif
</head>

<body>
  @yield('content')
</body>

</html>
