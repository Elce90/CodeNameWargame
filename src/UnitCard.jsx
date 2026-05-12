export default function UnitCardTemplate() {
  return (
    <div className="min-h-screen bg-[#111111] flex items-center justify-center p-10">
      <div className="relative w-[820px] bg-[#efe5d2] border-[6px] border-[#6d522d] rounded-[12px] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.7)] text-[#23170f]">
        {/* Paper texture */}
        <div className="absolute inset-0 opacity-[0.06] bg-[url('https://www.transparenttextures.com/patterns/aged-paper.png')]" />

        {/* Outer ornament corners */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-16 h-16 border-l-[6px] border-t-[6px] border-[#7d6035] rounded-tl-xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-r-[6px] border-t-[6px] border-[#7d6035] rounded-tr-xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-l-[6px] border-b-[6px] border-[#7d6035] rounded-bl-xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-r-[6px] border-b-[6px] border-[#7d6035] rounded-br-xl" />
        </div>

        {/* Header */}
        <div className="relative z-10 border-b-[3px] border-[#6d522d]">
          {/* Top strip */}
          <div className="bg-[#121212] text-[#d8c298] px-6 py-3 flex items-center justify-between border-b border-[#7d6035]">
            <div className="uppercase tracking-[0.2em] text-sm font-serif">
              № 27 · Линия Фронта
            </div>

            <div className="w-24 h-24 rounded-full bg-[#171717] border-[4px] border-[#8e6d3b] flex items-center justify-center shadow-inner absolute right-6 top-5">
              <div className="w-16 h-16 rounded-full border border-[#c7ab73] flex items-center justify-center text-[#d8c298] text-center text-[10px] uppercase tracking-[0.2em] leading-tight">
                Faction
                Seal
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="px-8 pt-6 pb-5 pr-36 bg-[#efe5d2]">
            <h1 className="text-5xl uppercase font-serif tracking-wide leading-none text-[#1f140c]">
              Арквикторы Ордо Ремеморис
            </h1>

            <div className="mt-3 text-2xl uppercase tracking-[0.12em] text-[#3e2d1c]">
              Элитная Пехота
            </div>
          </div>
        </div>

        {/* Top content */}
        <div className="relative z-10 grid grid-cols-[1.08fr_0.92fr] border-b-[3px] border-[#6d522d]">
          {/* Left portrait */}
          <div className="p-5 border-r-[3px] border-[#6d522d]">
            <div className="border-[3px] border-[#6d522d] bg-[#2a241d] rounded-sm overflow-hidden">
              <div className="relative h-[520px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop"
                  alt="unit"
                  className="w-full h-full object-cover opacity-80"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              </div>

              <div className="bg-[#151515] border-t-[2px] border-[#8b6a38] flex items-center justify-between px-5 py-3 text-[#d8c298] uppercase tracking-[0.15em]">
                <span className="text-sm">Масштаб модели</span>
                <span className="text-3xl font-serif">1/3</span>
              </div>
            </div>
          </div>

          {/* Right stats */}
          <div className="bg-[#f2e8d7] flex flex-col divide-y-[2px] divide-[#8f7750]">
            {[
              {
                icon: '♥',
                title: 'HP',
                subtitle: 'Живучесть',
                value: '14',
                color: '#1d1d1d',
              },
              {
                icon: '♛',
                title: 'OC',
                subtitle: 'Контроль',
                value: '3',
                color: '#1d1d1d',
              },
              {
                icon: '☲',
                title: 'AFLATUS',
                subtitle: 'Стихия',
                value: 'VENTUS',
                color: '#2f6874',
              },
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-between px-7 py-8">
                <div className="flex items-center gap-5">
                  <div
                    className="w-24 h-24 rounded-full border-[3px] flex items-center justify-center text-4xl"
                    style={{ borderColor: stat.color, color: stat.color }}
                  >
                    {stat.icon}
                  </div>

                  <div>
                    <div className="text-5xl font-serif leading-none text-[#1d130c] uppercase">
                      {stat.title}
                    </div>

                    <div className="mt-1 text-xl uppercase tracking-[0.08em] text-[#3d2d1d]">
                      {stat.subtitle}
                    </div>

                    <div
                      className="mt-2 text-4xl uppercase font-serif"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </div>
                  </div>
                </div>

                {stat.title !== 'AFLATUS' && (
                  <div className="text-7xl font-serif text-[#21150d] leading-none">
                    {stat.value}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom blocks */}
        <div className="relative z-10 grid grid-cols-2 border-b-[3px] border-[#6d522d]">
          {/* Abilities */}
          <div className="border-r-[3px] border-[#6d522d]">
            <div className="bg-[#121212] text-[#dcc69b] border-b-[2px] border-[#7d6035] px-6 py-4 text-3xl uppercase tracking-[0.14em] font-serif text-center">
              Способности
            </div>

            <div className="p-7 space-y-8 bg-[#efe5d2] min-h-[420px]">
              {[
                {
                  title: 'Эхо Великих',
                  text: 'В начале вашего хода выберите одну карту из вашей руки. До конца хода эта карта стоит на 1 Aflatus меньше.',
                },
                {
                  title: 'Резонанс Памяти',
                  text: 'Когда этот юнит уничтожает вражескую модель, вы можете взять 1 карту из колоды памяти.',
                },
                {
                  title: 'Неуступающие',
                  text: 'Этот юнит не может быть оттеснён из зоны, которую контролирует.',
                },
              ].map((ability, index) => (
                <div key={index}>
                  <div className="text-3xl font-serif uppercase text-[#1e130b] mb-3 leading-none">
                    {ability.title}
                  </div>

                  <p className="text-[18px] leading-relaxed text-[#3d2d1d]">
                    {ability.text}
                  </p>

                  {index !== 2 && (
                    <div className="mt-6 border-b border-[#b89b6f]" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div>
            <div className="bg-[#121212] text-[#dcc69b] border-b-[2px] border-[#7d6035] px-6 py-4 text-3xl uppercase tracking-[0.14em] font-serif text-center">
              Карты Юнита
            </div>

            <div className="p-7 space-y-8 bg-[#efe5d2] min-h-[420px]">
              {[
                {
                  num: '1',
                  title: 'Священный Мандат',
                  text: 'До конца хода юнит получает +1 OC и +1 к броскам атаки.',
                },
                {
                  num: '2',
                  title: 'Аналексис',
                  text: 'Вражеский юнит получает -2 к OC и не может использовать способности.',
                },
                {
                  num: '3',
                  title: 'Процессия Душ',
                  text: 'Верните до 2 союзных моделей в игру в пределах 6” от этого юнита.',
                },
              ].map((card, index) => (
                <div key={index} className="flex gap-5">
                  <div className="w-14 h-20 bg-[#1a1a1a] border-[2px] border-[#8b6a38] rounded-md flex items-center justify-center text-[#e0c897] text-3xl font-serif shrink-0">
                    {card.num}
                  </div>

                  <div>
                    <div className="text-3xl font-serif uppercase text-[#1e130b] mb-3 leading-none">
                      {card.title}
                    </div>

                    <p className="text-[18px] leading-relaxed text-[#3d2d1d]">
                      {card.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Keywords */}
        <div className="relative z-10 bg-[#121212] border-t-[2px] border-[#7d6035] px-8 py-5 text-center">
          <div className="text-[#e2cb9f] text-3xl uppercase tracking-[0.18em] font-serif mb-4">
            Ключевые Слова
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-[#f2e7cf] uppercase tracking-[0.12em] text-lg">
            {[
              'Человек',
              'Ордо Ремеморис',
              'Элита',
              'Пехота',
              'Рыцари',
              'Психомеханика',
            ].map((tag, i) => (
              <div key={tag} className="flex items-center gap-4">
                <span>{tag}</span>
                {i !== 5 && <span className="text-[#9b7a47]">•</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
