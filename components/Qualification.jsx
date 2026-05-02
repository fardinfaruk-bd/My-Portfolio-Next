export default function Qualification() {
  return (
    <section id="qualification" className="bg-card backdrop-blur-lg border border-border rounded-xl shadow-xl p-6 text-foreground py-12  reveal ">
      {/* Header Section */}
      <header className="text-center mb-16" data-purpose="page-header">
        <h1 className="text-4xl font-bold mb-2 tracking-tight">Qualification</h1>
        <p className="text-muted text-sm font-light">My Educational Journey</p>
      </header>

      {/* Main Content Section */}
      <main className="max-w-4xl mx-auto" data-purpose="qualification-content">
        {/* Column Headers (Experience & Education) */}
        <div className="flex justify-center items-center gap-16 mb-12">
          {/* Education Tab/Header */}
          <div className="flex items-center gap-2 cursor-pointer transition hover:text-primary">
            <svg
              className="w-6 h-6"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            <span className="text-lg font-medium">Education</span>
          </div>
        </div>

        {/* Timeline Component */}
        <div className="relative" data-purpose="timeline-container">
          {/* Central vertical line (hidden on mobile, shown on md+) */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-[2px] h-full bg-muted/20"></div>

          {/* Timeline Items Container */}
          <div className="space-y-12 md:space-y-16">
            {/* Item 1: SSC */}
            <div className="relative flex items-center justify-start md:justify-center reveal-item pl-10 md:pl-0">
              {/* Dot - aligned left on mobile, center on md+ */}
              <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 bg-primary rounded-full z-10"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                {/* Content - spans full width on mobile, left side on md+ */}
                <div className="md:pr-12 md:text-right">
                  <h3 className="text-lg font-semibold">SSC</h3>
                  <p className="text-muted text-sm mt-1">
                    Al-Zaber Institute
                  </p>
                  <div className="flex items-center justify-start md:justify-end gap-2 text-muted-foreground text-xs mt-3">
                    <svg
                      fill="none"
                      height="14"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    <span>2018-2021</span>
                  </div>
                </div>
                {/* Spacer for md+ */}
                <div className="hidden md:block md:pl-12"></div>
              </div>
            </div>

            {/* Item 2: Diploma */}
            <div className="relative flex items-center justify-start md:justify-center reveal-item pl-10 md:pl-0">
              {/* Dot */}
              <div className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 bg-primary rounded-full z-10"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 w-full">
                {/* Spacer for md+ */}
                <div className="hidden md:block md:pr-12"></div>
                {/* Content */}
                <div className="md:pl-12 text-left">
                  <h3 className="text-lg font-semibold">Diploma in Engineering</h3>
                  <p className="text-muted text-sm mt-1">
                    National Polytechnic Institute, Chittagong
                  </p>
                  <div className="flex items-center justify-start gap-2 text-muted-foreground text-xs mt-3">
                    <svg
                      fill="none"
                      height="14"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    <span>2022-2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
