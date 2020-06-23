SET NAMES UTF8;
DROP DATABASE IF EXISTS xiyou;
CREATE DATABASE xiyou CHARSET=UTF8;
USE xiyou;

/* 轮播图 */
CREATE TABLE bannerList(
    bid INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(200)
);
/* 轮播图下的七个小图 */
CREATE TABLE smallImgList(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    img VARCHAR(200)
);
/* 新品上市 */
CREATE TABLE newProduct(
    nid INT PRIMARY KEY AUTO_INCREMENT,
    money DECIMAL(5,2),
    img VARCHAR(200),
    href VARCHAR(128),
    subtitle VARCHAR(200)
);
/* 服装配饰图list */
CREATE TABLE clothingPicList(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    href VARCHAR(200),
    img VARCHAR(100)
);
/* 服装配饰list */
CREATE TABLE clothingList(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    detail VARCHAR(200),
    price DECIMAL(5,2),
    img VARCHAR(100)   
);
/* 家居用品图list */
CREATE TABLE homePicList(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    href VARCHAR(200),
    img VARCHAR(100)
);
/* 家居用品list */
CREATE TABLE homeList(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    detail VARCHAR(200),
    price DECIMAL(5,2),
    img VARCHAR(100)   
);
/* 珠宝首饰图list */
CREATE TABLE jewelsPicList(
    jid INT PRIMARY KEY AUTO_INCREMENT,
    href VARCHAR(200),
    img VARCHAR(100)
);
/* 珠宝首饰list */
CREATE TABLE jewelsList(
    jid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    detail VARCHAR(200),
    price DECIMAL(5,2),
    img VARCHAR(100)   
);
/* 户外出行图图list */
CREATE TABLE outgoingPicList(
    gid INT PRIMARY KEY AUTO_INCREMENT,
    href VARCHAR(200),
    img VARCHAR(100)
);
/* 户外出行list */
CREATE TABLE outgoingList(
    gid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    detail VARCHAR(200),
    price DECIMAL(5,2),
    img VARCHAR(100)   
);
/* 数码外设图list */
CREATE TABLE digitalPicList(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    href VARCHAR(200),
    img VARCHAR(100)
);
/* 数码外设list */
CREATE TABLE digitalList(
    hid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    detail VARCHAR(200),
    price DECIMAL(5,2),
    img VARCHAR(100)   
);
/* 玩具礼品图list */
CREATE TABLE toyPicList(
    tid INT PRIMARY KEY AUTO_INCREMENT,
    href VARCHAR(200),
    img VARCHAR(100)
);
/* 玩具礼品list */
CREATE TABLE toyList(
    tid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    detail VARCHAR(200),
    price DECIMAL(5,2),
    img VARCHAR(100)   
);
/* 促销专区图list */
CREATE TABLE salesPicList(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    href VARCHAR(200),
    img VARCHAR(100)
);
/* 促销专区list */
CREATE TABLE salesList(
    sid INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(200),
    detail VARCHAR(200),
    price DECIMAL(5,2),
    img VARCHAR(100)   
);
