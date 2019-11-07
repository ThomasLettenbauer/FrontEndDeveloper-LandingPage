/**
 * 
 * JS for Landing Page Project
 * It is about manipulationg the DOM
 * 
*/

/**
 * Define Global Variables
 * 
*/

var sections;
var navHeight; // Height of Navigation
var myTimeout; // Timeout Handle
const supportsNativeSmoothScroll = 'scrollBehavior' in document.documentElement.style;

var titleText = 'Geld verdienen mit Dividenden';
var footerText = '<p>&copy Tom</p>';

var mainHeaderValue = 'Dividendenstrategien'
var sectionIdValue = ['Section1', 'Section2', 'Section3', 'Section4'];
var sectionNavValue = ['Dogs of the Dow', 'High Dividend Yield', 'Dividendenwachstum', 'Dividenden ETFs'];
var sectionHeaderValue = ['Dogs of the Dow Strategie', 'High Dividend Yield Strategie', 'Dividendenwachstum Strategie', 'Dividenden ETF Strategie'];

var sectionText = [4];

sectionText[0] = '<p>Die Strategie Dogs of the Dow, die 1991 vom US-amerikanischen Aktienmanager Michael O\'Higgins entwickelt \
wurde, muss 10 Aktien, die den Dow Jones-Kurs repräsentieren, jährlich mit Dividendenrenditen hinterlegen. das \
wichtigste. Obwohl die Strategie im Jahr 2000 überzeugte, wurde sie vor allem in der Finanzkrise kritisiert. \
In diesem Artikel zeigen wir Ihnen, wie Sie diese Strategie mit Optionen drastisch verbessern können.</p> \
<p>Das Prinzip der Strategie "Die Hunde des Dow" \
In "Strategische Hunde" zu investieren ist ziemlich einfach. Wählen Sie am Ende des letzten Tages des Jahres \
die 10 Aktien mit der höchsten Dividendenrendite im Dow Jones Index aus. Sie investieren dann den gleichen \
Betrag in jede einzelne Aktie und behalten ihn ein Jahr lang. Sie wiederholen diesen Vorgang jedes Jahr.</p> \
<p>Unabhängig davon, ob die Märkte gut laufen oder nicht, hat der Dow Jones immer noch 10 Aktien, die \
angemessene Dividendenrenditen bieten. Die Dividende gilt als sichere Einnahmequelle für das kommende Jahr.</p>';

sectionText[1] = '<p>Eine Strategie für hohe Dividendenrenditen ist eine systematische Methode zum Kauf und Halten von Aktien, bei \
der die Dividende im Vergleich zum Aktienkurs hoch ist. Tatsächlich handelt es sich um eine Strategie zur \
Auswahl von Value-Aktien, da in Wirklichkeit der im Vergleich zur Dividende niedrige Aktienkurs die \
Hauptursache für die hohe Rendite ist.</p> \
<p>Eine Strategie für hohe Dividendenrenditen ist jedoch nur eine Variante von Aktienstrategien, bei denen \
wertvolle Aktien ausgewählt werden, und es gibt beträchtliche Belege und theoretische Belege dafür, dass \
Wertaktien über längere Zeiträume sowohl Wachstumsaktien als auch den Markt übertreffen . In diesem \
Zusammenhang ist die "Rendite" -Prämie, die für Strategien mit hoher Dividende gezahlt wird, tatsächlich eine \
Wertprämie.</p>';

sectionText[2] = '<p>Die Zuweisung eines größeren Teils des Portfolios an Unternehmen mit nachhaltigen und wachsenden Dividenden \
ist das Herzstück einer Wachstumsstrategie. Ein Portfolio mit dieser Allokation schützt vor Volatilität und \
den früheren Risiken, die mit steigenden Zinsen und einem verlangsamten Wirtschaftswachstum verbunden sind. \
Eine erfolgreiche Wachstumsdividendenstrategie erlaubt es der Größe der Branche oder des Unternehmens nicht, \
die Auswahl der Vermögenswerte einzuschränken. Stattdessen setzt es einen Überschuss an Vermögenswerten in \
Bezug auf die Fundamentaldaten einer Aktie.</p> \
<p>erfolgreiche Dividendenwachstumsstrategie sollte sich eher auf Qualität als auf Quantität konzentrieren. \
Dies bedeutet, dass Anleger nach Value-Aktien mit einer soliden Bilanz von Dividendenzahlungen und soliden \
Fundamenten suchen müssen. Sie müssen auch einen langfristigen Anlagehorizont haben, der es ihnen ermöglicht, \
ihre Gewinne in regelmäßigen Abständen wieder anzulegen. Dies ist der Schlüssel zu Wachstum und langfristiger \
Nachhaltigkeit in jedem Marktzyklus.</p>';

sectionText[3] = '<p>Machen Sie keinen Fehler, Dividenden-ETFs ersetzen Anleihen nicht perfekt. Die Risiko- und Leistungsmerkmale \
von Anlagevehikeln sind völlig unterschiedlich, und vor allem Dividenden-ETFs setzen Anleger einem \
Börsenrisiko aus, zum Guten oder zum Schlechten.</p> \
<p>Dividenden-ETFs sind jedoch für Anleger, die über die Volatilität von Aktien hinausblicken können, eine \
gangbare Alternative zu festverzinslichen Wertpapieren, um Renditen zu erzielen. In diesem Artikel werden wir \
uns einige der besten Dividenden-ETFs ansehen, die nach verschiedenen Faktoren klassifiziert sind: verwaltetes \
Vermögen, Wertentwicklung und Zahlungsströme. \
Wie in vielen Segmenten des ETF-Marktes ist der Raum für Dividenden extrem groß.</p> \
<p>Die größten Dividenden-ETFs bieten alle ein hohes Rendite- oder Dividendenwachstum und verwenden eine Vielzahl \
von Wahlkriterien.</p>';

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// Check if element is in Viewport
function isInViewPort(testElement) {
    var boundingElement = testElement.getBoundingClientRect();

    return (
        boundingElement.top >= 0 &&
        boundingElement.top + 200 <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

// Make Navigation visible/invisible
function navigationVisible(visibleYN) {

    var navMenu = document.querySelector('.navbar__menu');

    if (!visibleYN) {
        navMenu.classList.add('navbar__menu_invisible');
    } else { navMenu.classList.remove('navbar__menu_invisible'); }

    clearTimeout(myTimeout);

    myTimeout = setTimeout(function () {
        navigationVisible(false)
    },
        50000);

}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//insert header
function insertHeader() {
    var headerNode = document.createElement("header");
    headerNode.classList.add('main__hero');
    var h1 = document.createElement("h1");
    var h1Text = document.createTextNode(mainHeaderValue);
    h1.appendChild(h1Text);
    headerNode.appendChild(h1);
    document.querySelector("main").appendChild(headerNode);
}

//insert footer
function insertFooter() {
    document.querySelector("footer").innerHTML = footerText;
}




//insert sections
function insertSections() {
    var sectionNode;

    for (var i = 0; i < sectionIdValue.length; i++) {
        sectionNode = document.createElement("section");
        divNode = document.createElement("div");
        divNode.classList.add('landing__container');
        h2Node = document.createElement("h2");
        h2Text = document.createTextNode(sectionHeaderValue[i]);
        h2Node.appendChild(h2Text);
        divNode.appendChild(h2Node);
        divNode.innerHTML += sectionText[i];
        sectionNode.appendChild(divNode);
        sectionNode.id = sectionIdValue[i];
        sectionNode.setAttribute('data-nav', sectionNavValue[i]);
        document.querySelector("main").appendChild(sectionNode);
    }
}

//<header class="main__hero">
//<h1>Dividendenstrategien</h1>
//</header>

// build the nav
function buildMenu() {

    var navName;
    var sectionName;
    var navList = document.querySelector("#navbar__list");

    sections = document.querySelectorAll('section');

    for (var i = 0; i < sections.length; i++) {
        navName = sections[i].getAttribute('data-nav');
        sectionName = sections[i].getAttribute('id');
        navList.innerHTML += '<li class="menu__link" id="section__' + sectionName + '"><a href="#' + sectionName + '"><p>' + navName + '</p></a></li>';
    }

    navHeight = document.querySelector('header').getBoundingClientRect().height;

}

// Add class 'active' to section when near top of viewport
function checkActiveSection() {

    for (var i = 0; i < sections.length; i++) {

        var sectionID = 'section__' + sections[i].getAttribute('id');
        var navSection = document.getElementById(sectionID);


        if (isInViewPort(sections[i])) {
            sections[i].classList.add('active');
            navSection.classList.add('menu__active');
        } else {
            sections[i].classList.remove('active');
            navSection.classList.remove('menu__active');
        }
    }



}



// Scroll to anchor ID using scrollTO event
function smoothScrollingTo(target) {
    var myLinkedElement = document.querySelector(target.getAttribute('href'));
    var scrollTop = myLinkedElement.offsetTop - navHeight;
    var scrollLeft = myLinkedElement.offsetLeft;

    if (supportsNativeSmoothScroll) {
        window.scrollTo({
            top: scrollTop,
            left: scrollLeft,
            behavior: 'smooth'
        })
    } else {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 
addEventListener('load', function () {
    insertHeader();
    insertFooter();
    insertSections();
    buildMenu();
    document.title = titleText;
})

// Scroll to section on link click
addEventListener("click", function (event) {
    event.preventDefault();
    myTarget = event.target.parentElement;
    smoothScrollingTo(myTarget);
});


// Set sections as active
addEventListener('scroll', function () {
    navigationVisible(true);
    checkActiveSection();
})

