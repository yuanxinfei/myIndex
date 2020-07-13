

## 6.挖地免接口提供接口（20200705）

Tushare金融大数据开放社区（挖地免接口：获取每日涨幅数据（包括历史数据））
https://tushare.pro/
http://api.tushare.pro

### 6.1.基础数据

#### 6.1.1.股票列表

------

接口：stock_basic
描述：获取基础信息数据，包括股票代码、名称、上市日期、退市日期等

**输入参数**

| 名称        | 类型 | 必选 | 描述                                           |
| :---------- | :--- | :--- | :--------------------------------------------- |
| is_hs       | str  | N    | 是否沪深港通标的，N否 H沪股通 S深股通          |
| list_status | str  | N    | 上市状态： L上市 D退市 P暂停上市，默认L        |
| exchange    | str  | N    | 交易所 SSE上交所 SZSE深交所 HKEX港交所(未上线) |

**输出参数**

| 名称        | 类型 | 描述                                   |
| :---------- | :--- | :------------------------------------- |
| ts_code     | str  | TS代码                                 |
| symbol      | str  | 股票代码                               |
| name        | str  | 股票名称                               |
| area        | str  | 所在地域                               |
| industry    | str  | 所属行业                               |
| fullname    | str  | 股票全称                               |
| enname      | str  | 英文全称                               |
| market      | str  | 市场类型 （主板/中小板/创业板/科创板） |
| exchange    | str  | 交易所代码                             |
| curr_type   | str  | 交易货币                               |
| list_status | str  | 上市状态： L上市 D退市 P暂停上市       |
| list_date   | str  | 上市日期                               |
| delist_date | str  | 退市日期                               |
| is_hs       | str  | 是否沪深港通标的，N否 H沪股通 S深股通  |



