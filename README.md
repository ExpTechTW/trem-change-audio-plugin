
# trem-change-audio-plugin
自訂提示音效

## 使用方式

- 自訂目錄路徑
    - `individual_path`設為`false`(預設)
    - 將`folder`設為放置音效的目錄
    - 例：
	    ```yaml
	    folder: 'C:/User/User/sound/'
	    ```
    
- 個別設定每個音效
    - `individual_path`設為`true`
    - 將想自訂的音效指定路徑
    - 例：
	    ```yaml
	    EEW: 'C:/User/User/sound/eew.wav'
	    ```

>**⚠️注意**
>若自訂目錄路徑，目錄內音效檔名必須與預設檔名相同，個別設定則不需要，檔名可參考下方表格
>音效請使用`wav`格式

| 檔名 | 播放時機 |
|--|--|
| ALERT | 地震速報 預估震度 > 5弱 **（會播放兩次）** |
| EEW | 地震速報 |
| INTENSITY | 震度速報 |
| PGA1 | PGA > 8gal |
| PGA2 | PGA > 200gal |
| REPORT | 地震報告 |
| SHINDO0 | 震度 > 0 |
| SHINDO1 | 震度 > 2 |
| SHINDO2 | 震度 > 4 |
| TSUNAMI | 海嘯警報 |
| UPDATE | 地震速報 更新 |
| CANCEL | 地震速報 取消 |