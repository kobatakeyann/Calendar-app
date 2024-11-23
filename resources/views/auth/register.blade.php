@extends('layouts.app')

@section('content')
  <header>
    @include('layouts.header')
    <h2 class="text-center mb-4 fs-1"
      style="font-family: 'Dancing Script', cursive; color:rgb(247, 60, 35); font-weight: bold;">
      Sign up </h2>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">{{ __('Register') }}</div>
            <div class="card-body">
              <form method="POST" action="{{ route('register') }}">
                @csrf
                <div class="row mb-3">
                  <label for="name" class="col-md-4 col-form-label text-md-end">{{ __('User Name') }}</label>
                  <div class="col-md-6">
                    <input id="name" type="text" class="form-control @error('name') is-invalid @enderror"
                      name="name" value="{{ old('name') }}" required autocomplete="name" autofocus>
                    @error('name')
                      <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                      </span>
                    @enderror
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="email" class="col-md-4 col-form-label text-md-end">{{ __('Email Address') }}</label>
                  <div class="col-md-6">
                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror"
                      name="email" value="{{ old('email') }}" required autocomplete="email">
                    @error('email')
                      <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                      </span>
                    @enderror
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="password" class="col-md-4 col-form-label text-md-end">{{ __('Password') }}</label>
                  <div class="col-md-6">
                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                      name="password" required autocomplete="new-password">
                    @error('password')
                      <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                      </span>
                    @enderror
                  </div>
                </div>
                <div class="row mb-3">
                  <label for="password-confirm"
                    class="col-md-4 col-form-label text-md-end">{{ __('Confirm Password') }}</label>
                  <div class="col-md-6">
                    <input id="password-confirm" type="password" class="form-control" name="password_confirmation"
                      required autocomplete="new-password">
                  </div>
                </div>
                <div class="row mb-0">
                  <div class="col-md-6 offset-md-5">
                    <button type="submit" class="btn btn-primary">
                      {{ __('Sign up') }}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <section id="service" class="container my-5">
    <h2 class="text-center mb-4 fs-1"
      style="font-family: 'Dancing Script', cursive; color:rgb(247, 60, 35); font-weight: bold;">~
      Service ~</h2>
    <div class="container" id="service-1">
      <div class="row align-items-center mb-4 d-sm-flex">
        <div class="col-md-6">
          <img src="{{ asset('assets/calendar_image.png') }}" class="img-fluid align-items-center" alt="Calen Image"
            style="border-radius:5%; width: 100%; height:auto; padding:auto 10%;">
        </div>
        <div class="col-md-6" style="margin-top: 30px ">
          <h3 class="mb-3">📌 シンプルかつ自在にカスタマイズ可能なテーマ</h3>
          <p>
            一目で今月のスケジュールがわかるシンプルなデザインをベースに、日々の予定や大事なイベントを簡単に追加することができます。<br><br>
            カレンダーには好みの色を選択してそれぞれの予定を追加します。優先度で整理するのもよし、仕事とプライベートで分けるもよし、彩り自由です。
          </p>
        </div>
      </div>
    </div>
    <div class="row align-items-center mb-4" id="service-2" style="margin-top: 50px">
      <div class="col-md-6 order-md-2">
        <img src="{{ asset('assets/event_registration.png') }}" class="img-fluid align-items-center"
          alt="Service 2 Image" style="border-radius:3%; width: 90%; height:auto; padding:auto 10%;">
      </div>
      <div class="col-md-6 order-md-1" style="margin-top: 30px">
        <h3 class="mb-3"> 🎀 ひとことメモと一緒に予定を作成 </h3>
        <p>
          友人とのイベントが決まったら、忘れがちな内容をメモに留めて予定を追加します。
          あとはあなたの気分にぴったりなカラーテーマを選択し、カレンダーをイベントで彩りましょう。<br><br>
          作成した予定はワンクリックで簡単に編集＆削除できます。
        </p>
      </div>
    </div>
  </section>
@endsection
