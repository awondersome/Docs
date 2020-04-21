# ss/ssr

原理ssh隧道，客户端 => vps => 服务端

## vps 服务器

> [https://www.leiea.com/?p=570](https://www.leiea.com/?p=570)

aws免费1年

1. 注册

2. 管理控制台 ec2 => 创建实例(ubuntu18.04 1cpu 1gb ipv6)

3. 创建新密钥对，下载密钥aws.pem

4. chmod 400 aws.pem(密钥改成私有的)

5. ssh -i "aws.pem" ubuntu@ec2-13-113-164-64.ap-northeast-1.compute.amazonaws.com(连接服务器)

6. sudo -s（超级管理员）

7. apt-get update （更新apt-get）

8. apt-get install python-pip (下载python-pip)

9. pip install shadowsocks（下载shadowsocks）

10. vi /etc/shadowsocks.json(编辑配置文件)

    1. 按i进入编辑模式

    2. {"server":"0.0.0.0","server_port":443,"local_address":"127.0.0.1","local_port":1080,"password":"201010","timeout":300,"method":"aes-256-cfb","fast_open": false}

    3. esc退出编辑模式

    4. :wq保存

11. ssserver -c /etc/shadowsocks.json -d start(启动ss)

    1. 在openssl1.1.0版本中，EVP_CIPHER_CTX_cleanup函数被替换为EVP_CIPHER_CTX_reset(vi /usr/local/lib/python2.7/dist-packages/shadowsocks/crypto/openssl.py)

    2. 停止ss ssserver -c /etc/shadowsocks.json -d stop

    3. 重启ss ssserver -c /etc/shadowsocks.json -d reset

12. vi /etc/rc/local(开机自动启用)

    1. 添加"sudo ssserver -c /etc/shadowsocks.json -d start"

13. 滚动实例到最后，点击安全组launch-wizard-1，入站，编辑，添加规则，443端口，任意位置，保存

## bbr加速

1. uname -r(查看内核，4.10以上自带bbr)

2. sysctl net.ipv4.tcp_available_congestion_control (查看当前可用tcp控制算法)

3. sysctl net.ipv4.tcp_congestion_control （查看当前正在试用的tcp控制算法）

4. 启用bbr

    1. echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf

    2. echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf

    3. sysctl -p

5. lsmod | grep bbr 检查是否安装成功
