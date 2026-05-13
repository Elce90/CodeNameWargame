import { useRef, useState } from "react";
import html2canvas from "html2canvas";

export default function UnitCardBuilder() {
  const cardRef = useRef(null);

  const [unitData, setUnitData] = useState({
    title: "Арквикторы Ордо Ремеморис",
    subtitle: "Элитная Пехота",

    factionSeal:
      "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=400&auto=format&fit=crop",

    unitImage:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1200&auto=format&fit=crop",

    hp: 14,
    oc: 3,

    aflatus: "VENTUS",

    aflatusIcon:
      "https://upload.wikimedia.org/wikipedia/commons/3/3c/Wind_symbol.svg",

    abilities: [
      {
        title: "Эхо Великих",
        text: "В начале вашего хода выберите одну карту из вашей руки.",
      },

      {
        title: "Резонанс Памяти",
        text: "Когда этот юнит уничтожает модель, вы берёте карту.",
      },

      {
        title: "Неуступающие",
        text: "Юнит не может быть вытеснен из контролируемой зоны.",
      },
    ],

    cards: [
      {
        num: 1,
        title: "Священный Мандат",
        text: "Юнит получает +1 OC.",
      },

      {
        num: 2,
        title: "Аналексис",
        text: "Враг получает -2 OC.",
      },

      {
        num: 3,
        title: "Процессия Душ",
        text: "Верните союзную модель в игру.",
      },
    ],

    keywords: "Человек • Ордо Ремеморис • Элита • Пехота",
  });

  const updateField = (field, value) => {
    setUnitData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateAbility = (index, key, value) => {
    const updated = [...unitData.abilities];

    updated[index][key] = value;

    setUnitData((prev) => ({
      ...prev,
      abilities: updated,
    }));
  };

  const updateCard = (index, key, value) => {
    const updated = [...unitData.cards];

    updated[index][key] = value;

    setUnitData((prev) => ({
      ...prev,
      cards: updated,
    }));
  };

  const exportCard = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current, {
      backgroundColor: null,
      scale: 2,
      useCORS: true,
    });

    const link = document.createElement("a");

    link.download = `${unitData.title.replace(/\s+/g, "_")}.png`;

    link.href = canvas.toDataURL("image/png");

    link.click();
  };

  return (
    <div className="min-h-screen bg-[#111] text-white flex overflow-hidden">

      {/* SIDEBAR */}
      <div className="w-[340px] overflow-y-auto border-r border-white/10 bg-[#181818] p-3 shrink-0">

        <h2 className="text-2xl font-bold mb-4">
          Редактор карточки
        </h2>

        <div className="space-y-3">

          {/* HEADER */}
          <details
            open
            className="bg-[#202020] rounded-xl border border-white/10"
          >
            <summary className="cursor-pointer px-4 py-3 font-bold uppercase text-sm select-none">
              Верх карточки
            </summary>

            <div className="p-4 pt-2 border-t border-white/10 space-y-3">

              <Input
                label="Название"
                value={unitData.title}
                onChange={(v) => updateField("title", v)}
              />

              <Input
                label="Подзаголовок"
                value={unitData.subtitle}
                onChange={(v) => updateField("subtitle", v)}
              />

              <Input
                label="URL эмблемы"
                value={unitData.factionSeal}
                onChange={(v) => updateField("factionSeal", v)}
              />
            </div>
          </details>

          {/* LEFT SIDE */}
          <details className="bg-[#202020] rounded-xl border border-white/10">

            <summary className="cursor-pointer px-4 py-3 font-bold uppercase text-sm select-none">
              Левая часть карточки
            </summary>

            <div className="p-4 pt-2 border-t border-white/10 space-y-4">

              <Input
                label="URL изображения юнита"
                value={unitData.unitImage}
                onChange={(v) => updateField("unitImage", v)}
              />

              <div>
                <div className="text-sm uppercase font-bold opacity-70 mb-2">
                  Способности
                </div>

                <div className="space-y-2">

                  {unitData.abilities.map((ability, index) => (
                    <details
                      key={index}
                      className="bg-[#262626] rounded-lg border border-white/10"
                    >
                      <summary className="cursor-pointer px-3 py-2 text-sm font-bold select-none">
                        Способность #{index + 1}
                      </summary>

                      <div className="p-3 border-t border-white/10 space-y-2">

                        <Input
                          label="Название"
                          value={ability.title}
                          onChange={(v) =>
                            updateAbility(index, "title", v)
                          }
                        />

                        <Textarea
                          label="Текст"
                          value={ability.text}
                          onChange={(v) =>
                            updateAbility(index, "text", v)
                          }
                        />
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </details>

          {/* RIGHT SIDE */}
          <details className="bg-[#202020] rounded-xl border border-white/10">

            <summary className="cursor-pointer px-4 py-3 font-bold uppercase text-sm select-none">
              Правая часть карточки
            </summary>

            <div className="p-4 pt-2 border-t border-white/10 space-y-3">

              <Input
                label="HP"
                type="number"
                value={unitData.hp}
                onChange={(v) => updateField("hp", v)}
              />

              <Input
                label="OC"
                type="number"
                value={unitData.oc}
                onChange={(v) => updateField("oc", v)}
              />

              <Input
                label="Aflatus"
                value={unitData.aflatus}
                onChange={(v) => updateField("aflatus", v)}
              />

              <Input
                label="URL иконки Aflatus"
                value={unitData.aflatusIcon}
                onChange={(v) => updateField("aflatusIcon", v)}
              />

              <div className="pt-2">
                <div className="text-sm uppercase font-bold opacity-70 mb-2">
                  Карты
                </div>

                <div className="space-y-2">

                  {unitData.cards.map((card, index) => (
                    <details
                      key={index}
                      className="bg-[#262626] rounded-lg border border-white/10"
                    >
                      <summary className="cursor-pointer px-3 py-2 text-sm font-bold select-none">
                        Карта #{index + 1}
                      </summary>

                      <div className="p-3 border-t border-white/10 space-y-2">

                        <Input
                          label="Номер"
                          type="number"
                          value={card.num}
                          onChange={(v) =>
                            updateCard(index, "num", v)
                          }
                        />

                        <Input
                          label="Название"
                          value={card.title}
                          onChange={(v) =>
                            updateCard(index, "title", v)
                          }
                        />

                        <Textarea
                          label="Текст"
                          value={card.text}
                          onChange={(v) =>
                            updateCard(index, "text", v)
                          }
                        />
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </details>

          {/* BOTTOM */}
          <details className="bg-[#202020] rounded-xl border border-white/10">

            <summary className="cursor-pointer px-4 py-3 font-bold uppercase text-sm select-none">
              Нижняя часть карточки
            </summary>

            <div className="p-4 pt-2 border-t border-white/10">

              <Textarea
                label="Ключевые слова"
                value={unitData.keywords}
                onChange={(v) => updateField("keywords", v)}
              />
            </div>
          </details>

          {/* EXPORT */}
          <details className="bg-[#202020] rounded-xl border border-white/10">

            <summary className="cursor-pointer px-4 py-3 font-bold uppercase text-sm select-none">
              Экспорт
            </summary>

            <div className="p-4 border-t border-white/10">

              <button
                onClick={exportCard}
                className="w-full bg-green-600 hover:bg-green-500 py-3 rounded-xl font-bold transition"
              >
                Сохранить PNG
              </button>
            </div>
          </details>
        </div>
      </div>

      {/* PREVIEW */}
      <div className="flex-1 overflow-auto p-4 md:p-6 flex items-start justify-center bg-[#0d0d0d]">

        <div
          ref={cardRef}
          className="w-full max-w-[980px] aspect-[3/4] bg-[#efe5d2] text-[#1a1a1a] border-[6px] border-[#6d522d] rounded-xl overflow-hidden shadow-2xl"
        >

          {/* HEADER */}
          <div className="relative border-b-[3px] border-[#6d522d] px-6 py-4 pr-28">

            <div className="text-[10px] uppercase tracking-[0.18em] opacity-70 mb-2">
              № 27 · Линия Фронта
            </div>

            <h2 className="text-3xl font-bold uppercase leading-tight">
              {unitData.title}
            </h2>

            <div className="mt-1 text-lg uppercase opacity-80">
              {unitData.subtitle}
            </div>

            <div className="absolute top-3 right-3 w-20 h-20 rounded-full border-[3px] border-[#6d522d] overflow-hidden bg-black">

              <img
                src={unitData.factionSeal}
                alt="seal"
                crossOrigin="anonymous"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TOP BLOCK */}
          <div className="grid grid-cols-[0.75fr_1.25fr] border-b-[3px] border-[#6d522d] h-[28%] max-h-[420px]">

            {/* IMAGE */}
            <div className="border-r-[3px] border-[#6d522d] p-4">

              <div className="border-[3px] border-[#6d522d] overflow-hidden bg-black flex flex-col">

                <img
                  src={unitData.unitImage}
                  alt="unit"
                  crossOrigin="anonymous"
                  className="w-full h-full object-cover"
                />

                <div className="bg-[#151515] text-[#e7d1aa] flex items-center justify-between px-5 py-3 uppercase">
                  <span>Композиция</span>
                  <span className="text-3xl">4/8</span>
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-rows-3 h-full divide-y-[2px] divide-[#8f7750]">

              <BigStat
                label="HP"
                subtitle="Живучесть"
                value={unitData.hp}
                icon="♥"
              />

              <BigStat
                label="OC"
                subtitle="Контроль"
                value={unitData.oc}
                icon="♛"
              />

              <BigStat
                label="AFLATUS"
                subtitle="Стихия"
                value={unitData.aflatus}
                icon={unitData.aflatusIcon}
              />
            </div>
          </div>

          {/* BOTTOM */}
          <div className="grid grid-cols-2 border-b-[3px] border-[#6d522d]">

            {/* ABILITIES */}
            <div className="border-r-[3px] border-[#6d522d]">

              <SectionHeader title="Способности" />

              <div className="p-6 space-y-6 min-h-[400px]">

                {unitData.abilities.map((ability, index) => (
                  <div key={index}>

                    <div className="text-3xl font-bold uppercase mb-3">
                      {ability.title}
                    </div>

                    <p className="text-lg leading-relaxed">
                      {ability.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CARDS */}
            <div>

              <SectionHeader title="Карты Юнита" />

              <div className="p-6 space-y-6 min-h-[400px]">

                {unitData.cards.map((card, index) => (
                  <div key={index} className="flex gap-4">

                    <div className="w-14 h-20 bg-[#111] text-[#e2c48f] flex items-center justify-center rounded-md text-3xl shrink-0">
                      {card.num}
                    </div>

                    <div>

                      <div className="text-3xl font-bold uppercase mb-2">
                        {card.title}
                      </div>

                      <p className="text-lg leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* KEYWORDS */}
          <div className="bg-[#111] text-[#e7d1aa] px-8 py-5 text-center">

            <div className="text-3xl uppercase mb-3">
              Ключевые Слова
            </div>

            <div className="text-lg uppercase tracking-wide">
              {unitData.keywords}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title }) {
  return (
    <div className="bg-[#121212] text-[#dcc69b] px-6 py-4 text-3xl uppercase text-center border-b-[2px] border-[#7d6035]">
      {title}
    </div>
  );
}

function Input({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="text-xs opacity-70 block mb-1">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) =>
          onChange(
            type === "number"
              ? Number(e.target.value)
              : e.target.value
          )
        }
        className="w-full px-3 py-2 text-sm rounded-lg bg-[#262626] border border-white/10 outline-none focus:border-white/30"
      />
    </div>
  );
}

function Textarea({ label, value, onChange }) {
  return (
    <div>
      <label className="text-sm opacity-70 block mb-1">
        {label}
      </label>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={3}
        className="w-full px-3 py-2 text-sm rounded-lg bg-[#262626] border border-white/10 resize-none outline-none focus:border-white/30"
      />
    </div>
  );
}

function BigStat({ icon, label, subtitle, value }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 min-h-0 overflow-hidden">

      {/* LEFT */}
      <div className="flex items-center gap-4 min-w-0 overflow-hidden">

        {/* ICON */}
        <div className="w-16 h-16 shrink-0 rounded-full border-[2px] border-[#6d522d] flex items-center justify-center overflow-hidden bg-white">

          {typeof icon === "string" && icon.startsWith("http") ? (
            <img
              src={icon}
              alt="icon"
              crossOrigin="anonymous"
              className="w-10 h-10 object-contain"
            />
          ) : (
            <div className="text-3xl">
              {icon}
            </div>
          )}
        </div>

        {/* TEXT */}
        <div className="min-w-0 overflow-hidden">

          <div className="text-3xl leading-none font-bold uppercase truncate">
            {label}
          </div>

          <div className="text-sm uppercase opacity-70 truncate">
            {subtitle}
          </div>
        </div>
      </div>

      {/* VALUE */}
      <div className="text-5xl leading-none font-bold ml-3 text-right break-words">
        {value}
      </div>
    </div>
  );
}