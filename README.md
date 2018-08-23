# 文章咨询聚合系统

> 目录结构

``` bash
├── app
|    ├── Action
|    |     ├── Commend 用户获得推荐文章的API请求文件  
|    |     ├── Edit    后台管理员对文章进行管理的API请求文件
|    |     ├── User    记录用户行为的API请求文件
|    ├── Biz  数据库表的文件，返回表名(其他未列出来的都是定向站点的未经处理的文章粗胚)
|    |     ├── Commend.php 用来存储每日推荐文章
|    |     ├── News.php    存储定向站点上次爬取的URL，防止重复爬取
|    |     ├── Theme.php   存储处理过后的文章 
|    ├── Service (未列出来的都是定向爬取站点的处理服务)
|    |     ├── Collection
|    |     |       ├── Collection.php 收集文章的入口文件
|    |     |       ├── GrabSource.php 统一的爬取网页的内容服务
|    |     |       ├── SaveIndex.php  存储上次爬取存储的索引，方便及时阻断服务
|    |     |       ├── SaveNews.php   存储信息的工厂，根据爬取名字来决定将信息存储到哪一个文档中  
|    |     ├── Commend
|    |     |       ├── Compute.php     计算权重的服务(待完善)
|    |     |       ├── config.php      进行推荐的配置文件
|    |     |       ├── GetCommend.php  将文章存入推荐表
|    |     |       ├── GetTarget.php   给推荐文章进行排序的服务
|    |     |       ├── SaveCommend.php 将推荐的文章存入到推荐表中
|    |     |       ├── GetNews.php     让用户得到推荐的文章
|    |     |       ├── GetDetails.php  让用户得到推荐文章的文章详情
|    |     ├── Common
|    |     |       ├── Sort.php       排序的公共服务
|    |     |       ├── TimeDeal.php   对时间进行处理的服务，返回距现在多少小时
|    |     |       ├── TimeChange.php 对距离现在多少小时进行处理的服务，美化时间
|    |     ├── Formatdata
|    |     |       ├── Format.php     文本内容提取的入口文件
|    |     |       ├── PullWord.php   通用的分词服务
|    |     |       ├── Compare.php    文章与段落相关度的对比
|    |     |       ├── GetContent.php 对文章内容进行清理，提取段落信息
|    |     |       ├── WordResult.php 根据传递过来的文本信息计算词频
|    |     ├── Edit  给后台管理人员显示以及修改、删除文章的服务
|    |     ├── User  用户行为的服务
|    ├── config
|    |     ├── urllist.php  需要爬取网站的配置信息以及筛选信息规则
|    ├── Console   计划任务启动
|    |     ├── Index.php    文章的采集以及美化的总的入口文件
|    |     ├── Commend.php  获得每日推荐文章
|                       
├── bin
|    ├── console 设置脚本
├── public 统一入口文件

```
> 设计思路

````

````
       



       



       