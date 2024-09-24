import React from 'react';
import './Main.css'
import img1 from '../../assets/img/soy-4-0-0-0-0-1583496123.jpg'
import img2 from '../../assets/img/5-0-0-0-0-1583757694.jpg'
import img3 from '../../assets/img/charvak-0-0-0-0-1588834007.jpg'
import img4 from '../../assets/img/3.jpg'
import img5 from '../../assets/img/charvak-0-0-0-0-1591261338.jpg'
import img6 from '../../assets/img/kaladzhik-4-0-0-0-0-1614660671.jpg'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker} from "react-icons/hi";

const Countries = [
    {
        id: 1,
        imgSrc: img1,
        destTitle: 'Olmos soy',
        location: 'Uzbekistan, Navoiy',
        grade: 'ETA KAYF',
        fees: '$300',
        descriptions: 'Navoiy viloyati Navbahor tumanidagi “Olmos soy” dam olish maskani sizning taʼtilingizni bezatib beradigan va undan to‘liq zavqlanishingizga imkon beradigan barcha sayyohlarga xizmatlarni taklif etadi.',
    },
    {
        id: 2,
        imgSrc: img2,
        destTitle: 'Lazurnaya',
        location:'Uzbekistan, Navoiy',
        grade: 'ETA KAYF',
        fees: '$200',
        descriptions: 'Navoiy shahri yaqinida go‘zal Tudakul ko‘li bo‘yidagi dam olish bilan ko‘plab sayyohlarni o‘ziga jalb etadigan ajoyib “Lazurnaya” dam olish maskani joylashgan. Dam olish maskanida mehmonxonalar majmuasi, kottejlar, kafelar va dam olish maskanlari mavjud.',
    },
    {
        id: 3,
        imgSrc: img3,
        destTitle: 'Chorvoq',
        location:'Uzbekistan, Tashkent',
        grade: 'ETA KAYF',
        fees: '$400',
        descriptions: 'Quyosh, tog‘lar va suv, bundan yaxshiroq yana nima bo‘lishi mumkin?' +
            'O‘zbekistonda plyaj ta’tilini o‘ylab yurgan bo‘lsangiz Toshkent viloyatining Bo‘stonliq tumanida joylashgan Chorvoq suv omboriga e’tibor qaratishingiz kerak. Dam olish maskaniga poytaxtdan taksi, poyezd yoki avtobusda borish mumkin.',
    },
    {
        id: 4,
        imgSrc: img4,
        destTitle: 'Chimyon',
        location:'Uzbekistan, Tashkent',
        grade: 'ETA KAYF',
        fees: '$350',
        descriptions: 'Toshkentning diqqatga sazovor joylaridan biri bu uning atrofi, yaʼni G‘arbiy Tyan-Shanning chiroyli tog‘laridir. Toshkentdan avtomashinada bir soatdan ko‘proq vaqt uzoqlikka yurilsa, Chimyon tog‘larining ajoyib joylariga yetib olish mumkin',
    },
    {
        id: 5,
        imgSrc: img5,
        destTitle: 'Amirsoy',
        location:'Uzbekistan, Tashkent',
        grade: 'ETA KAYF',
        fees: '$410',
        descriptions: 'Agar siz toza billur buloqlarni, shudring tomchilari va gullarning cho‘g‘ ranglari bilan qo‘shilib ketgan zumrad dalalarni ko‘rishni istasangiz, “Amirsoy dam olish maskani” ga xush kelibsiz. U yerda siz xiyobon mehmonxonalariga joylashishingiz, uzunligi 2193 metrlik yo‘laklarda gondolaga minib uchishingiz, tog‘ suvli oqimlarida piyoda sayr qilishingiz va boshqa ko‘p narsalardan bahramand bo‘lishingiz mumkin.',
    },
    {
        id: 6,
        imgSrc: img6,
        destTitle: 'Qalajiq-qadimiy',
        location:'Uzbekistan, Xorazm',
        grade: "SOG'LOM LASHTIRISH",
        fees: '$240',
        descriptions: 'Urganch shahridan 90 km. uzoqlikda, qumli Qoraqum cho‘lining o‘rtasida g‘aroyib voha – “Qalajiq” ekoturistik shaharchasi joylashgan. Shaharcha hududida, ikkita asosiy diqqatga sazovor joy – yoshi qariyb uch ming yilga teng qal’a va shifobaxsh xususiyatlarga ega sho‘r ko‘l mavjud',
    }
]

const Main = () => {
    return (
        <section className={'main container section'}>
            <div  data-aos={"fade-left"}  className="secTitle">
                <h3 className="title">
                    Most visited destinations
                </h3>
            </div>

            <div className="secContent grid">
                {Countries.map(item => {
                    return (
                        <div  data-aos={"fade-right"}  key={item.id} className={'singleDestination'}>
                            <div className="imageDiv">
                                <img src={item.imgSrc} alt={item.destTitle}/>
                            </div>
                            <div className="cardInfo">
                                <h4 className="destTitle">{item.destTitle}</h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker className={'icon'}/>
                                    <span className="name">{item.location}</span>
                                </span>
                                <div className="fees flex">
                                    <div className="grade">
                                        <span>{item.grade}
                                            <small>+1</small>
                                        </span>
                                    </div>
                                    <div className="price">
                                        <h5>{item.fees}</h5>
                                    </div>
                                </div>
                                <div className="desc">
                                    <p>{item.descriptions}</p>
                                </div>
                                <button className="btn flex">
                                    BATAFSIL <HiOutlineClipboardCheck className={'icon'}/>

                                </button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Main;