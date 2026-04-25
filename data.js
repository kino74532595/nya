// data.js
const carData =[
    {
        id: "105a",
        name: "日産 リーフ E+ X スーパーブラック",
        catchphrase: "当社初登場！EV日産リーフ しかも激安車！最初のEVにうってつけ！",
        price: "110", // コミコミ価格（万円）
        status: "販売中", // 販売中, 商談中, 売約済
        mainImage: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=800&q=80", // 一覧や詳細トップに表示するメイン画像
        
        // ▼スペック表（項目名も内容も、車ごとに自由に設定・増減できます）
        specs:[
            { title: "年式　走行距離", text: "令和4年 (2022年)　19.2万ｋｍ" },
            { title: "グレード", text: "E+ X" },
            { title: "スペック", text: "駆動方式 前輪駆動 2WD<br>バッテリー容量 62kWh<br>残りセグメント 12/12" },
            { title: "装備品", text: "純正ナビ/TV/Bluetooth<br>純正ビルトインETC<br>ステアリングヒーター<br>前後シートヒーター" },
            { title: "状態", text: "外装…看板カッティングシール痕あり<br>内装…ダッシュボード加工痕跡あり<br>タイヤ…ダンロップ 2025年製 残り80%" }
        ],

        // ▼自由記述欄（バッククォート ` で囲みます。これまでのHTMLタグがそのまま使えます！）
        freeText: `
            <h3>当社初登場！EV日産リーフ しかも激安車！</h3>
            <p>ガソリン価格が高止まりしています。欧州では中古EV車がよく売れているそうです。<br>
            懐疑的だった私ですら背に腹は代えられません。</p>
            
            <p>ただ、１回の充電でどのぐらい走れるのか？、コスパは？家にちゃんと帰れるのか？！<br>
            そんな謎だらけのEVを仕入れてみました。</p>
            
            <figure class="c mb30">
                <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=400&q=80" alt="写真1">
                <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=400&q=80" alt="写真2">
            </figure>
            
            <p><strong>激安の理由</strong><br>
            年式の割に価格が安いのは、なんとこちらの個体<br>
            ”元タクシー”<br>
            だったからです。</p>

            <p>緑ナンバーは毎年車検です。メンテナンスはしっかりされていますが、内外装には加工痕跡があります。<br>
            （特に状態の悪い内装パネル４つは交換いたしました。ご安心ください。）<br>
            ですので、いつもの在庫車とは違い、コスパ重視で多少のことは気にされない方向きの個体です。</p>
            
            <figure class="c mb30">
                <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=400&q=80" alt="写真3">
            </figure>
            
            <p>■ コラム ■ EVはなぜ普及しない？<br>
            国際エネルギー機関（IEA）の発表データで、世界の電気自動車の普及率は、2024年時点で22％です。<br>
            一番のネックはアパートやマンションにお住まいの方が充電環境がないことなのではないかと私は思います。</p>
        `
    },
    {
        id: "001",
        name: "スズキ スペーシアカスタムＸＳリミテッド",
        catchphrase: "プレミアムメンテナンス込み！特別仕様のカッコイイ1台",
        price: "36.8",
        status: "売約済",
        mainImage: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80",
        specs:[
            { title: "年式　走行距離", text: "平成27年 (2015年)　5.5万km" },
            { title: "装備", text: "両側パワースライドドア / 15インチアルミ" }
        ],
        freeText: `
            <p>限定車です。ボディ鉄粉除去、エンジン燃焼室洗浄など、当社のプレミアムメンテナンスを全実施済み。</p>
        `
    }
];