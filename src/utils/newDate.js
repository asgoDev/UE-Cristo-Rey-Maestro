class MyDate {
  constructor(stringDate) {
    // Crear instancia de fecha en la zona horaria de Venezuela (UTC-4)
    this.date = stringDate ? new Date(stringDate + 'T00:00:00-04:00') : null;
  }

  today() {
    const date = new Date();
    date.setUTCHours(date.getUTCHours() - 4); // Ajustar a la zona horaria de Venezuela (UTC-4)
    return date.toLocaleDateString("es-ES");
  }

  todayShort() {
    const date = new Date();
    date.setUTCHours(date.getUTCHours() - 4); // Ajustar a la zona horaria de Venezuela (UTC-4)
    return date
      .toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .replace(/ /g, "");
  }

  toLong() {
    if(!this.date) return ''
    return this.date.toLocaleDateString("es-ES");
  }

  toShort() {
    if(!this.date) return ''
    return this.date
      .toLocaleDateString("es-ES", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
      .replace(/ /g, "");
  }
}

export const newDate = (someDate) => new MyDate(someDate);
