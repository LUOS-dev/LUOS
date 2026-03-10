import { useMemo, useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday, isBefore, startOfDay } from "date-fns";
import { es } from "date-fns/locale";
import logo from "../assets/public/Logo.svg?url";
import { bookingTexts } from "../i18n/booking-translation";
import { useLanguage } from "../i18n/utils";
import "./Booking.css";


export function Booking() {
  const BASE_TIMEZONE = "America/Mexico_City";
  
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [timezone, setTimezone] = useState<string>(
    Intl.DateTimeFormat().resolvedOptions().timeZone || BASE_TIMEZONE
  );
  const { lang } = useLanguage();
  const texts = bookingTexts[lang];
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [showGuestInput, setShowGuestInput] = useState(false);
  const [guests, setGuests] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Base slots are defined in Mexico City timezone and shown converted to the selected timezone.
  const baseAvailableTimes = [
    "10:30 am",
    "12:00 pm",
    "2:00 pm",
    "3:30 pm",
  ];

  const availableTimes = useMemo(
    () =>
      baseAvailableTimes.map((baseTime) => ({
        baseTime,
        displayTime: convertTimeBetweenTimeZones(baseTime, BASE_TIMEZONE, timezone, date),
      })),
    [timezone, date]
  );

  const selectedDisplayTime = selectedTime
    ? convertTimeBetweenTimeZones(selectedTime, BASE_TIMEZONE, timezone, date)
    : null;

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (date && selectedTime) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedTime || isSubmitting) return;

    setIsSubmitting(true);

    const guestList = guests.filter(g => g.trim() !== "").map(g => g.trim());

    const startUTC = createUTCDate(date, selectedTime, BASE_TIMEZONE);

    const payload = {
      ...formData,
      date: startUTC,
      time: selectedDisplayTime,
      timezone,
      guests: guestList
    };

    try {
      const res = await fetch("/api/schedule-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        alert("¡Llamada agendada! Revisa tu correo.");
      } else {
        alert("Hubo un error al agendar.");
      }

    } catch (error) {
      console.error(error);
      alert("Error de conexión.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAddGuest = () => {
    if (guests.length < 10) {
      setGuests([...guests, ""]);
    }
  };

  const handleRemoveGuest = (index: number) => {
    setGuests(guests.filter((_, i) => i !== index));
    if (guests.length === 1) {
      setShowGuestInput(false);
    }
  };

  const handleGuestEmailChange = (index: number, value: string) => {
    const newGuests = [...guests];
    newGuests[index] = value;
    setGuests(newGuests);
  };

  // Calendar functions
  const getDaysInMonth = () => {
    const start = startOfMonth(currentMonth);
    const end = endOfMonth(currentMonth);
    return eachDayOfInterval({ start, end });
  };

  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const handleDateSelect = (day: Date) => {
    setDate(day);
  };

  // Format date for display
  const formattedDate = format(date, "EEEE, MMMM d", { locale: es });

  const weekdays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const daysInMonth = getDaysInMonth();

  return (
    <div className="booking-page">
      <main className="booking-main">
        <div className="booking-header fade-in">
          <h1 className="booking-title">{texts.title}</h1>
          <p className="booking-subtitle">{texts.subTitle}</p>
        </div>

        <div className="booking-card slide-in-right">
          {/* Left Panel - Dynamic Info */}
          <div className="booking-info-panel">
            <div className="info-panel-bg">
              <div className="bg-blob-1"></div>
              <div className="bg-blob-2"></div>
            </div>

            <div className="info-panel-content">
              {step === 2 && (
                <button onClick={handleBack} className="back-button">
                  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  {texts.buttonBack}
                </button>
              )}

              <div style={{ paddingTop: "1.5rem" }}>
                <div className="logo-circle"><img src={logo} alt="Logo de LUOS" className="logo-image" /></div>
                <h3 className="company-name">LUOS</h3>
                <h2 className="call-type">{texts.callSubTitle}</h2>

                <div className="info-list">
                  <div className="info-item">
                    <svg className="info-icon icon-large info-icon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="info-text">30 Min</span>
                  </div>

                  {step === 2 && selectedTime && selectedDisplayTime ? (
                    <div className="info-item slide-in-left">
                      <svg className="info-icon icon-large info-icon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div className="date-info">
                        <span className="info-text info-text-white">
                          {selectedDisplayTime} - {addMinutes(selectedDisplayTime, 30)}
                        </span>
                        <span>{format(date, "EEEE, MMMM d, yyyy", { locale: es })}</span>
                        <span className="timezone-text">{timezone}</span>
                      </div>
                    </div>
                  ) : (
                    <div className="info-item">
                      <svg className="info-icon icon-large info-icon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="info-text-small">
                        {texts.infoForm}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="copyright">&copy; 2026 LUOS Inc.</div>
          </div>

          {/* Right Panel - Interaction */}
          <div className="booking-content-panel">
            {step === 1 ? (
              <div className="fade-in">
                <div className="step-header">
                  <h3 className="step-title">{texts.TitleSchedile}</h3>
                  <span className="selected-date">{formattedDate}</span>
                </div>

                <div className="datetime-container">
                  <div className="calendar-section">
                    <div className="calendar-wrapper">
                      <div className="custom-calendar">
                        <div className="calendar-header">
                          <button onClick={handlePreviousMonth} className="calendar-nav">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                          </button>
                          <span className="calendar-month">
                            {format(currentMonth, "MMMM yyyy", { locale: es })}
                          </span>
                          <button onClick={handleNextMonth} className="calendar-nav">
                            <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>

                        <div className="calendar-grid">
                          {weekdays.map((day) => (
                            <div key={day} className="calendar-weekday">
                              {day}
                            </div>
                          ))}
                          {daysInMonth.map((day, index) => {
                            const isSelected = isSameDay(day, date);
                            const isCurrentMonth = isSameMonth(day, currentMonth);
                            const isTodayDay = isToday(day);
                            const isPast = isBefore(day, startOfDay(new Date()));

                            return (
                              <button
                                key={index}
                                onClick={() => !isPast && handleDateSelect(day)}
                                disabled={isPast}
                                className={`calendar-day ${isSelected ? "selected" : ""} ${isTodayDay && !isSelected ? "today" : ""} ${!isCurrentMonth ? "other-month" : ""} ${isPast ? "disabled" : ""}`}
                              >
                                {format(day, "d")}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="timezone-section">
                      <label className="timezone-label">{texts.gmts}</label>
                      <select
                        className="timezone-select"
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                      >
                        <option value="America/Mexico_City">Mexico (GMT-6)</option>
                        <option value="America/Guayaquil">Ecuador (GMT-5)</option>
                        <option value="America/New_York">New York (GMT-5)</option>
                        <option value="America/Los_Angeles">Los Angeles (GMT-8)</option>
                        <option value="Europe/Madrid">España (GMT+1)</option>
                        <option value="America/Bogota">Colombia (GMT-5)</option>
                        <option value="America/Lima">Perú (GMT-5)</option>
                        <option value="America/Santiago">Chile (GMT-4)</option>
                      </select>
                    </div>
                  </div>

                  <div className="time-slots">
                    {availableTimes.map((timeSlot) => (
                      <button
                        key={timeSlot.baseTime}
                        onClick={() => handleTimeSelect(timeSlot.baseTime)}
                        className={`time-slot ${selectedTime === timeSlot.baseTime ? "selected" : ""}`}
                      >
                        {timeSlot.displayTime}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="next-button-container">
                  {selectedTime && (
                    <button onClick={handleNext} className="btn btn-primary fade-in">
                      {texts.button1}
                      <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div className="fade-in">
                <div style={{ marginBottom: "1.5rem" }}>
                  <h3 className="step-title">{texts.fromTitle}</h3>
                  <p className="step-subtitle">
                    {texts.fromSubTitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-group">
                    <label className="form-label">{texts.data1}</label>
                    <input
                      required
                      type="text"
                      className="form-input"
                      placeholder={texts.name}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{texts.data2}</label>
                    <input
                      required
                      type="email"
                      className="form-input"
                      placeholder={texts.descriptionData2}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{texts.data3}</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+52 (55) 0000 0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">{texts.data4}</label>
                    <textarea
                      required
                      className="form-textarea"
                      placeholder={texts.descriptiondata4}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                    />
                  </div>

                  {/* Add Guest Section */}
                  <div className="guest-section">
                    {!showGuestInput ? (
                      <button
                        type="button"
                        className="add-guest-button"
                        onClick={() => {
                          setShowGuestInput(true);
                          setGuests([""]);
                        }}
                      >
                        <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        {texts.plusGuest}
                      </button>
                    ) : (
                      <div className="guest-container fade-in">
                        <div className="guest-header">
                          <label className="guest-count">
                            {texts.guest} ({guests.length}/10)
                          </label>
                          <button
                            type="button"
                            className="close-button"
                            onClick={() => {
                              setShowGuestInput(false);
                              setGuests([]);
                            }}
                          >
                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                        <p className="guest-info">
                          {texts.descriptionGuests}
                        </p>

                        <div className="guest-list">
                          {guests.map((guest, index) => (
                            <div key={index} className="guest-item fade-in">
                              <input
                                type="email"
                                className="form-input"
                                placeholder={`${texts.mailExample}${index + 1}@example.com`}
                                value={guest}
                                onChange={(e) =>
                                  handleGuestEmailChange(index, e.target.value)
                                }
                              />
                              <button
                                type="button"
                                className="remove-button"
                                onClick={() => handleRemoveGuest(index)}
                              >
                                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>

                        {guests.length < 10 && (
                          <button
                            type="button"
                            className="add-another-button"
                            onClick={handleAddGuest}
                          >
                            <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                            </svg>
                            {texts.button2}
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="submit-loading">
                        <svg className="spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeDasharray="31.4 31.4" />
                        </svg>
                        {texts.sending || "Enviando..."}
                      </span>
                    ) : (
                      texts.button3
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function addMinutes(timeStr: string, minutesToAdd: number): string {
  try {
    const [time, period] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map(Number);

    let totalMinutes =
      (hours % 12) * 60 +
      minutes +
      (period.toLowerCase() === "pm" ? 720 : 0);
    totalMinutes += minutesToAdd;

    const newHours24 = Math.floor(totalMinutes / 60) % 24;
    const newMinutes = totalMinutes % 60;

    const newPeriod = newHours24 >= 12 ? "pm" : "am";
    const newHours12 = newHours24 % 12 || 12;

    return `${newHours12}:${newMinutes.toString().padStart(2, "0")} ${newPeriod}`;
  } catch (e) {
    return timeStr;
  }
}
function createUTCDate(date: Date, time: string, sourceTimeZone: string) {
  const parsed = parse12HourTime(time);
  if (!parsed) {
    return new Date(date).toISOString();
  }

  const utcDate = zonedTimeToUtc(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    parsed.hours24,
    parsed.minutes,
    sourceTimeZone
  );

  return utcDate.toISOString();
}

function convertTimeBetweenTimeZones(
  time: string,
  fromTimeZone: string,
  toTimeZone: string,
  referenceDate: Date
): string {
  const parsed = parse12HourTime(time);
  if (!parsed) return time;

  const utcDate = zonedTimeToUtc(
    referenceDate.getFullYear(),
    referenceDate.getMonth(),
    referenceDate.getDate(),
    parsed.hours24,
    parsed.minutes,
    fromTimeZone
  );

  return formatTimeInTimeZone(utcDate, toTimeZone);
}

function parse12HourTime(time: string): { hours24: number; minutes: number } | null {
  const [timePart, period] = time.trim().toLowerCase().split(" ");
  if (!timePart || !period) return null;

  const [rawHours, rawMinutes] = timePart.split(":");
  const hours = Number(rawHours);
  const minutes = Number(rawMinutes);

  if (Number.isNaN(hours) || Number.isNaN(minutes)) return null;

  let hours24 = hours % 12;
  if (period === "pm") hours24 += 12;

  return { hours24, minutes };
}

function zonedTimeToUtc(
  year: number,
  month: number,
  day: number,
  hours: number,
  minutes: number,
  timeZone: string
): Date {
  const utcGuess = Date.UTC(year, month, day, hours, minutes, 0);
  const firstOffset = getTimeZoneOffsetMinutes(new Date(utcGuess), timeZone);
  const adjustedUtc = utcGuess - firstOffset * 60_000;
  const secondOffset = getTimeZoneOffsetMinutes(new Date(adjustedUtc), timeZone);

  return new Date(utcGuess - secondOffset * 60_000);
}

function getTimeZoneOffsetMinutes(date: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const values: Record<string, string> = {};
  for (const part of parts) {
    if (part.type !== "literal") {
      values[part.type] = part.value;
    }
  }

  const asUtc = Date.UTC(
    Number(values.year),
    Number(values.month) - 1,
    Number(values.day),
    Number(values.hour),
    Number(values.minute),
    Number(values.second)
  );

  return (asUtc - date.getTime()) / 60_000;
}

function formatTimeInTimeZone(date: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .toLowerCase();
}

export default Booking;