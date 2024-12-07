const menu = {
    list() {
        return [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"菜品","menuJump":"列表","tableName":"caipin"}],"menu":"菜品管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"新上菜品","menuJump":"列表","tableName":"xinshangcaipin"}],"menu":"新上菜品管理"},{"child":[{"buttons":["查看","修改","删除","报表"],"menu":"预订订单","menuJump":"列表","tableName":"yudingdingdan"}],"menu":"预订订单管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"活动信息","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息管理"},{"child":[{"buttons":["查看","删除"],"menu":"用户评价","menuJump":"列表","tableName":"yonghupingjia"}],"menu":"用户评价管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"商家客服","tableName":"chat"},{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"},{"child":[{"buttons":["查看","删除","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"buttons":["查看","删除"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["查看","删除"],"menu":"已发货订单","tableName":"orders/已发货"},{"buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"菜品列表","menuJump":"列表","tableName":"caipin"}],"menu":"菜品模块"},{"child":[{"buttons":["查看","预订"],"menu":"新上菜品列表","menuJump":"列表","tableName":"xinshangcaipin"}],"menu":"新上菜品模块"},{"child":[{"buttons":["查看"],"menu":"活动信息列表","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"菜品","menuJump":"列表","tableName":"caipin"}],"menu":"菜品管理"},{"child":[{"buttons":["查看","预订"],"menu":"新上菜品","menuJump":"列表","tableName":"xinshangcaipin"}],"menu":"新上菜品管理"},{"child":[{"buttons":["查看","支付","删除","评价"],"menu":"预订订单","menuJump":"列表","tableName":"yudingdingdan"}],"menu":"预订订单管理"},{"child":[{"buttons":["查看"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看","删除","确认收货"],"menu":"已发货订单","tableName":"orders/已发货"},{"buttons":["查看","删除"],"menu":"未支付订单","tableName":"orders/未支付"},{"buttons":["查看","删除"],"menu":"已取消订单","tableName":"orders/已取消"},{"buttons":["查看","删除"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看","删除"],"menu":"已退款订单","tableName":"orders/已退款"},{"buttons":["查看","删除"],"menu":"已完成订单","tableName":"orders/已完成"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"菜品列表","menuJump":"列表","tableName":"caipin"}],"menu":"菜品模块"},{"child":[{"buttons":["查看","预订"],"menu":"新上菜品列表","menuJump":"列表","tableName":"xinshangcaipin"}],"menu":"新上菜品模块"},{"child":[{"buttons":["查看"],"menu":"活动信息列表","menuJump":"列表","tableName":"huodongxinxi"}],"menu":"活动信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"}]
    }
}
export default menu;
