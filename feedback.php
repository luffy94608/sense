<?php
/**
 * Created by PhpStorm.
 * User: luffy
 * Date: 16/6/25
 * Time: 23:29
 */

header("content-type:text/html;charset=utf-8");
ini_set("magic_quotes_runtime",0);
require 'PHPMailer/class.phpmailer.php';

class MyPhpMailerUtil2 extends PHPMailer
{
    // Set default variables for all new objects


    public $From        = 'senseadmin@163.com';
    public $FromName    = '意见反馈';

    public $SMTPAuth    = true;                         // 启用 SMTP 验证功能
    public $SMTPSecure  = 'ssl';                       // 安全协议
    public $Mailer      = 'smtp';                         // Alternative to isSMTP()
    public $Host        = 'smtp.163.com';           // SMTP 服务器
    public $Port        = 465;                              //SMTP服务器的端口号

    public $Username    = 'senseadmin@163.com';     // SMTP服务器用户名
    public $Password    = 'sense123456';                    // SMTP服务器密码

    public $Sender      ='';//发件人地址
    public $ReturnPath  ='';//邮件回复地址
    public $Subject     ='意见反馈';//
    public $Body        ='';//
    public $AltBody     ='';//



    public $WordWrap    = 100;
    public $CharSet     = 'UTF-8';

    public function __construct($exceptions = false)
    {
        parent::__construct($exceptions);
        $this->SetFrom($this->From,$this->FromName);
        $this->AddReplyTo($this->From,$this->FromName);
    }

    // Replace the default debug output function
    protected function edebug($msg) {
        print('My Site Error');
        print('Description:');
        printf('%s', $msg);
        exit;
    }

    //Extend the send function
    public function send() {
        return parent::send();
    }

    // Create an additional function
    public function createBodyHtml() {
        // Place your new code here
        $this->Body='';
    }
}

$params['name'] = $_POST['name'] ? $_POST['name'] : false;
$params['email'] = $_POST['email'] ? $_POST['email'] : false;
$params['content'] = $_POST['content'] ? $_POST['content'] : false;
if(!in_array(false,$params,true))
{

    $content = sprintf("
            姓名:%s \n
            邮箱:%s\n
            留言内容:%s\n",
            $params['name'],
            $params['email'],
            $params['content']);
    $mail =  new MyPhpMailerUtil2();
//    $to = "29620639@qq.com";
    $to = "sense@sense.com.cn";
    $mail->AddAddress($to);
    $mail->Body=$content;
    $result = $mail->send();
}
die();
