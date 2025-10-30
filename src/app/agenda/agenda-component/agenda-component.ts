import { Component, OnInit } from '@angular/core';

interface Event {
  date: Date;
  title: string;
  time: string;
  color?: string;
}

@Component({
  selector: 'app-agenda-component',
  standalone: false,
  templateUrl: './agenda-component.html',
  styleUrl: './agenda-component.css'
})
export class AgendaComponent implements OnInit {
  currentMonth = new Date();
  selectedDate = new Date();
  weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  days: any[] = [];
  events: Event[] = [];
  filteredEvents: Event[] = [];

  ngOnInit() {
    this.events = [
      { date: new Date(2025, 9, 29), title: 'Corte - João', time: '09:00 - 09:30', color: '#6b4eff' },
      { date: new Date(2025, 10, 2), title: 'Barba - Lucas', time: '10:00 - 10:30', color: '#22c55e' },
      { date: new Date(2025, 10, 5), title: 'Sobrancelha - Ana', time: '14:00 - 14:20', color: '#facc15' },
    ];

    this.generateCalendar(this.currentMonth);
    this.filterEvents(this.selectedDate);
  }

  generateCalendar(date: Date) {
    const startOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const endOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const startDay = startOfMonth.getDay();
    const daysInMonth = endOfMonth.getDate();

    this.days = [];

    // Dias do mês anterior (para completar a grade)
    const prevMonthLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
      const d = new Date(date.getFullYear(), date.getMonth() - 1, prevMonthLastDay - i);
      this.days.push({ number: d.getDate(), date: d, isOtherMonth: true });
    }

    // Dias do mês atual
    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(date.getFullYear(), date.getMonth(), i);
      const event = this.events.find(e => e.date.toDateString() === d.toDateString());
      this.days.push({
        number: i,
        date: d,
        hasEvents: !!event,
        eventColor: event?.color || '',
        isOtherMonth: false,
      });
    }

    // Dias do próximo mês (para completar até 42 células)
    const nextDaysCount = 42 - this.days.length;
    for (let i = 1; i <= nextDaysCount; i++) {
      const d = new Date(date.getFullYear(), date.getMonth() + 1, i);
      this.days.push({ number: d.getDate(), date: d, isOtherMonth: true });
    }
  }

  previousMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.generateCalendar(this.currentMonth);
  }

  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.generateCalendar(this.currentMonth);
  }

  selectDay(date: Date) {
    this.selectedDate = date;
    this.filterEvents(date);
  }

  filterEvents(date: Date) {
    this.filteredEvents = this.events.filter(
      e => e.date.toDateString() === date.toDateString()
    );
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  }
}