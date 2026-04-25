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
        id: "spacia_x",
        name: "スズキ スペーシア Ｘ ハイブリッド",
        catchphrase: "お買い得車！汚れが全然目立たないミントちゃん✨",
        price: "36.8",
        status: "販売中",
        mainImage: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=800&q=80",
        specs:[
            { title: "カラー", text: "フレンチミントパールメタリック" },
            { title: "装備", text: "上位グレードＸ / 新品タイヤ / 新品足周りブーツ" }
        ],
        freeText: `
            <h3>プレミアムメンテナンス込みの１台</h3>
            <p>汚れが全然目立たないペールトーンのミントちゃん✨</p>
            <p>上位グレードＸ 燃費抜群ハイブリッド 新品タイヤ 新品足周りブーツ（メルセデス用グリス打ち換え） 新品撥水ワイパー ほぼ新品純正バッテリー</p>
            <p>新車価格 約１７０万円のところ、車検２年付きお渡しでお得です。</p>
        `
    },
    {
        id: "hustler_x",
        name: "スズキ ハスラーＨＹＢＲＩＤ Ｘ",
        catchphrase: "全方位モニター付メモリーナビ アクティブイエロー２トーン",
        price: "91.8",
        status: "販売中",
        mainImage: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80",
        specs:[
            { title: "年式", text: "2020年モデル" },
            { title: "車検", text: "令和９年１０月９日まで" }
        ],
        freeText: `
            <p>車検付き即日納車OK（佐賀、佐世保）</p>
            <p>ハイブリッド 純正ナビ 全方位モニター シートヒーター デュアルカメラブレーキサポート 後方 ブレーキサポート 純正１５インチアルミホイール プレミアムメンテナンス実施 プッシュスタート</p>
        `
    },
    {
        id: "nbox_custom",
        name: "ホンダ N-BOXカスタム G・EXターボ",
        catchphrase: "ホンダセンシング プラチナホワイト・パール",
        price: "91.8",
        status: "販売中",
        mainImage: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
        specs:[
            { title: "年式", text: "2019年モデル ターボ" },
            { title: "装備", text: "ホンダセンシング / 両側パワースライドドア" }
        ],
        freeText: `
            <p>スーパースライドシート 両側パワースライドドア 純正１５インチアルミホイール LEDヘッドライト オートライト バックカメラ ビルトインETC</p>
            <p>プレミアムメンテナンス実施 安全＆快適装備ホンダセンシング付 アダプティブクルーズコントロール</p>
        `
    },
    {
        id: "minicab_m",
        name: "三菱 ミニキャブトラック Ｍ",
        catchphrase: "シルキーシルバーメタリック ５速ＭＴ ２ＷＤ",
        price: "51.8",
        status: "売約済",
        mainImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=800&q=80",
        specs:[
            { title: "年式", text: "2021年モデル" },
            { title: "装備", text: "パワーステアリング / ５速マニュアル / エアコン" }
        ],
        freeText: `
            <p>車検２年付きお渡し Ｗエアバッグ ABS マニュアルエアコン</p>
        `
    },
    {
        id: "benz_c200",
        name: "メルセデスベンツＣクラス C200",
        catchphrase: "アバンギャルド オブシディアンブラック",
        price: "164.8",
        status: "販売中",
        mainImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
        specs:[
            { title: "年式", text: "2015年モデル" },
            { title: "装備", text: "レーダークルーズコントロール / 純正LEDヘッドライト" }
        ],
        freeText: `
            <p>車検あり即ご納車OK ディーラーメンテ車 人気No1カラー プレミアムメンテナンス実施</p>
            <p>フル安全装備 ナビ バックカメラ シートヒーター プッシュスタート レーダークルーズコントロール オートライト オートハイビーム</p>
        `
    },
    {
        id: "mini_one",
        name: "BMW Mini ONE",
        catchphrase: "ブレイジングレッド＆ホワイト２トーン",
        price: "82.8",
        status: "売約済",
        mainImage: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80",
        specs:[
            { title: "年式", text: "2017年モデル ワンオーナー" },
            { title: "車検", text: "令和８年７月まで" }
        ],
        freeText: `
            <p>即納車OK！ ディーラーメンテ車 超極上コンディション</p>
            <p>ナビパッケージ タイヤ、ブレーキなど消耗品まで良好 コスパ最強の１台</p>
        `
    }
];