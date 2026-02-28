import { useState } from "react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, isToday } from "date-fns";
import { es } from "date-fns/locale";
import "./Booking.css";

export function Booking() {
  const [step, setStep] = useState(1);
  const [date, setDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const [showGuestInput, setShowGuestInput] = useState(false);
  const [guests, setGuests] = useState<string[]>([]);

  // Mock available times
  const availableTimes = [
    "9:00 am",
    "10:30 am",
    "1:00 pm",
    "3:00 pm",
    "4:30 pm",
  ];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const guestList = guests.filter(g => g.trim() !== "").join(", ");
    const message = guestList 
      ? `¡Llamada agendada con éxito! Te hemos enviado un correo con los detalles.\n\nInvitados: ${guestList}`
      : "¡Llamada agendada con éxito! Te hemos enviado un correo con los detalles.";
    alert(message);
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
  const fullDateString = selectedTime
    ? `${selectedTime} - ${addMinutes(selectedTime, 30)}, ${format(date, "EEEE, MMMM d, yyyy", { locale: es })}`
    : "";

  const weekdays = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const daysInMonth = getDaysInMonth();

  return (
    <div className="booking-page">
      <main className="booking-main">
        <div className="booking-header fade-in">
          <h1 className="booking-title">Cuéntanos sobre tu proyecto</h1>
          <p className="booking-subtitle">Agenda una llamada con nosotros</p>
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
                  Atrás
                </button>
              )}

              <div style={{ paddingTop: "1.5rem" }}>
                <div className="logo-circle">L</div>
                <h3 className="company-name">LUOS</h3>
                <h2 className="call-type">Discovery Call</h2>

                <div className="info-list">
                  <div className="info-item">
                    <svg className="info-icon icon-large info-icon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="info-text">30 Min</span>
                  </div>

                  {step === 2 && selectedTime ? (
                    <div className="info-item slide-in-left">
                      <svg className="info-icon icon-large info-icon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <div className="date-info">
                        <span className="info-text info-text-white">
                          {selectedTime} - {addMinutes(selectedTime, 30)}
                        </span>
                        <span>{format(date, "EEEE, MMMM d, yyyy", { locale: es })}</span>
                        <span className="timezone-text">Mexico City Time</span>
                      </div>
                    </div>
                  ) : (
                    <div className="info-item">
                      <svg className="info-icon icon-large info-icon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="info-text-small">
                        Los detalles de la conferencia web se proporcionarán tras la confirmación.
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
                  <h3 className="step-title">Selecciona fecha y hora</h3>
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

                            return (
                              <button
                                key={index}
                                onClick={() => handleDateSelect(day)}
                                className={`calendar-day ${isSelected ? "selected" : ""} ${isTodayDay && !isSelected ? "today" : ""} ${!isCurrentMonth ? "other-month" : ""}`}
                              >
                                {format(day, "d")}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>

                    <div className="timezone-section">
                      <label className="timezone-label">Zona Horaria</label>
                      <select className="timezone-select" defaultValue="mx">
                        <option value="mx">Mexico City Time (GMT-6)</option>
                        <option value="ny">New York Time (GMT-5)</option>
                        <option value="la">Los Angeles Time (GMT-8)</option>
                      </select>
                    </div>
                  </div>

                  <div className="time-slots">
                    {availableTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        className={`time-slot ${selectedTime === time ? "selected" : ""}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="next-button-container">
                  {selectedTime && (
                    <button onClick={handleNext} className="btn btn-primary fade-in">
                      Siguiente
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
                  <h3 className="step-title">Ingresa tus datos</h3>
                  <p className="step-subtitle">
                    Cuéntanos un poco sobre ti y tu proyecto.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="booking-form">
                  <div className="form-group">
                    <label className="form-label">Nombre Completo *</label>
                    <input
                      required
                      type="text"
                      className="form-input"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Correo Electrónico *</label>
                    <input
                      required
                      type="email"
                      className="form-input"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Número de Teléfono</label>
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
                    <label className="form-label">Descripción del Proyecto *</label>
                    <textarea
                      required
                      className="form-textarea"
                      placeholder="Breve descripción de lo que necesitas..."
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
                        Agregar invitados (opcional)
                      </button>
                    ) : (
                      <div className="guest-container fade-in">
                        <div className="guest-header">
                          <label className="guest-count">
                            Invitados ({guests.length}/10)
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
                          Los invitados recibirán un correo con los detalles de la reunión.
                        </p>

                        <div className="guest-list">
                          {guests.map((guest, index) => (
                            <div key={index} className="guest-item fade-in">
                              <input
                                type="email"
                                className="form-input"
                                placeholder={`invitado${index + 1}@example.com`}
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
                            Agregar otro invitado
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <button type="submit" className="submit-button">
                    Confirmar Llamada
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

// Helper to add minutes to a time string like "3:00 pm"
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
export default Booking;