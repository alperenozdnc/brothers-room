import React from "react";

import "./Home.css";

export const Home: React.FC = () => {
    return (
        <main className="sections">
            <section className="image-section">
                <div className="container-left">
                    <img className="image-section-image three" src="/3.png" />
                </div>
                <div className="container-right">
                    <img className="image-section-image two" src="/2.png" />
                    <img className="image-section-image one" src="/1.png" />
                </div>
            </section>
            <section className="text-section">
                <h1 className="text-section-title">Abimin Oda</h1>
                <p className="text-section-paragraph">
                    Abimde öyle bir kendine hayranlık var ki, sanki odanın
                    düzenini değiştirince evrenin dengesini de düzeltiyormuş
                    gibi davranıyor. Her birkaç haftada bir, nedensiz bir
                    ilhamla kalkıp eşyaları yerinden oynatıyor, sandalyeyi
                    duvarın öbür ucuna, yatağı pencerenin altına, masayı da
                    nedense kapının tam önüne koyuyor. Sonra da ellerini beline
                    koyup sanat eserine bakar gibi etrafı inceliyor, gururla “Bu
                    sefer tam oldu,” diyor. Sanki önceki düzeni yapan da o
                    değilmiş gibi, bir önceki hali topa tutup, yenisini göklere
                    çıkarıyor. Gerçekten daha mı iyi oluyor? Hayır. Ama onun
                    için önemli olan rahatlık değil, "vizyon." Masaya ulaşmak
                    için zigzag çizerek yürümemiz, yatağın yanındaki prizlere
                    uzanmanın artık imkânsız olması falan hep tasarımın bir
                    parçasıymış gibi anlatılıyor. En komiği de, her yeni düzeni
                    kusursuz ilan edip bir hafta sonra sıkılıp yine
                    değiştiriyor. Ama her defasında, bir önceki hâlin ne kadar
                    “yanlış” olduğunu anlatmayı ihmal etmiyor. Oda onun oyun
                    alanı, biz de istemeden mobilya taşımacılığına terfi etmiş
                    seyircilerdik sanki.
                </p>
            </section>
        </main>
    );
};
