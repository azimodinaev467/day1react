import React from 'react'
import './Crad.css'

export default function Crad() {
  const courses = [
    { title: '.Net August 2026', badge: '7/7', badgeColor: '#22c55e', date: 'Aug 5, 2026 - Dec 5, 2026', tag: 'Profsouz', qualifiers: '0/7', schedule: 'Mn, Tu, Wd, Th, Fr, Sa', duration: '4 months | 16:00 - 18:00 |' },
    { title: 'Computer Basics August 2026 (1)', badge: '8/9', badgeColor: '#22c55e', date: 'Aug 10, 2026 - Oct 9, 2026', tag: 'Profsouz', qualifiers: '5/8', schedule: 'Mn, Wd, Fr', duration: '2 months | 16:32 - 18:00 |' },
    { title: 'Junior JS august 2026 (1)', badge: '4/8', badgeColor: '#ef4444', date: 'Aug 10, 2026 - Nov 9, 2026', tag: 'Profsouz', qualifiers: '1/4', schedule: 'Tu, Th, Sa', duration: '3 months No Lessons today' },
    { title: 'Robotics September 09:00', badge: '8/9', badgeColor: '#22c55e', date: 'Sep 10, 2026 - Oct 11, 2026', tag: 'Profsouz', qualifiers: '6/8', schedule: 'Tu, Th, Sa', duration: '1 month No Lessons today' },
    { title: 'Html - july - kids 1', badge: '8/10', badgeColor: '#22c55e', date: 'Jul 10, 2026 - Nov 10, 2026', tag: 'Profsouz', qualifiers: '3/8', schedule: 'Mn, Wd, Fr', duration: '4 months | 16:30 - 18:00 |' },
    { title: 'Next.js', badge: '12/14', badgeColor: '#22c55e', date: 'Oct 5, 2026 - Nov 5, 2026', tag: 'Profsouz', qualifiers: '0/12', schedule: 'Mn, Tu, Wd, Th, Fr, Sa', duration: '1 month | 18:00 - 20:00 |' },
    { title: 'Figma September 2026', badge: '2/10', badgeColor: '#ef4444', date: 'Sep 5, 2026 - Nov 4, 2026', tag: 'Profsouz', qualifiers: '1/2', schedule: 'Mn, Tu, Wd, Th, Fr, Sa', duration: '2 months | 14:00 - 16:00 |' },
    { title: 'JS Junior September 16:30 - (1)', badge: '11/13', badgeColor: '#22c55e', date: 'Sep 9, 2026 - Jan 9, 2027', tag: 'Profsouz', qualifiers: '5/11', schedule: 'Mn, Wd, Fr', duration: '4 months | 16:30 - 18:00 |' },
  ]

  return (
    <div className="crad-grid">
      {courses.map((course, i) => (
        <div className="crad-card" key={i}>
          <div className="crad-top">
            <div className="crad-dot"></div>
            <h2 className="crad-title">{course.title}</h2>
            <div className="crad-badge-wrap">
              <span className="crad-badge" style={{ background: course.badgeColor }}>{course.badge}</span>
              <span className="crad-role">Student</span>
            </div>
          </div>
          <p className="crad-date">{course.date}</p>
          <span className="crad-tag">{course.tag}</span>
          <div className="crad-middle">
            <span className="crad-qualifiers-count">{course.qualifiers}</span>
            <div className="crad-schedule-block">
              <p className="crad-schedule">{course.schedule}</p>
              <p className="crad-duration">{course.duration}</p>
            </div>
          </div>
          <p className="crad-qualifiers-label">Qualifiers</p>
          <div className="crad-actions">
            <button className="crad-journal-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              Journal
            </button>
            <div className="crad-icon-group">
              <button className="crad-icon-btn crad-tg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.289c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L6.318 14.617l-2.967-.924c-.645-.203-.657-.645.136-.953l11.57-4.461c.537-.194 1.006.131.505.969z"/></svg>
              </button>
              <button className="crad-icon-btn crad-edit">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
