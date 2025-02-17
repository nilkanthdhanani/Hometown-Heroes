import React from 'react';
import './impressum.scss';

export default function Impressum() {
    return (
        <section className="impressum">
            <div className="container11">
                <div className="impressum-main">
                    <h2>IMPRESSUM</h2>
                    <p>Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen. Sämtliche Bilder und Grafiken sind rechtlich geschützt und gehören Tom von Below.</p>
                    <div className="impressum-link">
                        <div className="impressum-link-div">
                            <span>Angaben gemäß § 5 TMG</span>
                        </div>
                        <div className="impressum-link-div">
                            <h3>HOMETOWN HEROES</h3>
                            <span>Vertreten durch:</span>
                            <span>Tom von Below</span>
                        </div>
                        <div className="impressum-link-div">
                            <h3>Kontakt:</h3>
                            <span>Frickestraße 83</span>
                            <span>20251 Hamburg</span>
                        </div>
                        <div className="impressum-link-div">
                            <h3>E-Mail:</h3>
                            <h3>info@hometown-heroes.de</h3>
                            <span>Haftungsausschluss:</span>
                            <span>Haftung für Inhalte</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
