# Calendar-App

### アプリケーションの利用

以下の手順でアプリケーションをセットアップ、利用してください。

#### 初期セットアップ

1. 拡張機能のインストール<br>
   `PHP Server`<br>
   `PHP Intelephense`
2. .env ファイルの設定<br>
   ・ `.env`ファイルの作成
   ```
   cp .env.example .env
   ```
   ・ `APP_KEY`の発行
   ```
   php artisan key:generate
   ```
   ・ キャッシュのクリア
   ```
   php artisan config:clear
   ```
   ・ `.env`内で`SESSION_DRIVER=array`とする
3. PHP ライブラリのインストール
   ```
   composer install
   ```
4. 依存関係のインストール
   ```
   npm install
   ```

#### アプリケーションの起動

1. サーバーの立ち上げ
   ```
   npm run dev
   ```
2. 開発サーバーの起動
   ```
   php artisan serve
   ```
