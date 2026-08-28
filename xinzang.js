/*
 * 心脏+
 * 基于 chxm1023/Rewrite 的 xinzang.js 调整
 */

var body = $response.body || "";

if (body.includes("套餐已过期")) {
  $done({ status: 404, body: " " });
} else {
  var newYearCard = '"yearCard":{"goodNo":"dc3c24a224cc41fe804108c856ebfd9c","status":1,"content":"心脏+","endTime":"2099-09-09到期","type":3,"serviceBalanceId":2501498,"goodName":"心脏+包年"}';
  var newExperienceCard = '"experienceCard":{"status":1,"content":"体验卡剩余3次","balanceNum":99999999,"endTime":"2099-09-09到期","balanceName":"极速心电图（ECG）分析服务","type":1,"serviceBalanceId":9999999}';

  body = body.replace(/"endTime"\s*:\s*".*?"/g, '"endTime":"2099-09-09到期"');
  body = body.replace(/"hwMembershipDate"\s*:\s*".*?"/g, '"hwMembershipDate":"2099-09-09到期"');
  body = body.replace(/"terminalType"\s*:\s*"\d+"/g, '"terminalType":"0"');
  body = body.replace(/"result"\s*:\s*\w+/g, '"result":true');
  body = body.replace(/"yearCard"\s*:\s*\{.*?\}/g, newYearCard);
  body = body.replace(/"experienceCard"\s*:\s*\{.*?\}/g, newExperienceCard);

  $done({ body: body });
}
