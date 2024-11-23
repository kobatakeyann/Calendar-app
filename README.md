# Calendar-App

### アプリケーションの利用

以下の手順でアプリケーションをセットアップ、利用してください。

#### 初期セットアップ

1. 拡張機能のインストール<br>
   `PHP Server`<br>
   `PHP Intelephense`
2. 環境変数の設定<br>
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

   ・ `.env`ファイルの編集<br>

   ```
   APP_MAINTENANCE_STORE=database
   DB_CONNECTION=mysql

   SESSION_DRIVER=database

   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=calendar_app
   DB_USERNAME=root
   DB_PASSWORD=your_password
   ```

   とする

3. PHP ライブラリのインストール
   ```
   composer install
   ```
4. 依存関係のインストール
   ```
   npm install
   ```
5. テーブルの作成
   ```
   # 2で設定した名前のデータベースを作成[SQL query]
   CREATE DATABASE your_database_name;
   # テーブルの作成
   php artisan migrate
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
