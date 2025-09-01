"use client";

import { useState, useEffect } from "react";
import Card from "./Card";
import Modal from "./Modal";

const Adventures = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("2025");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRide, setSelectedRide] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const ridesPerPage = 6;

  // Sample rides data
  const rides = [
    {
      id: 1,
      title: "Boso-boso Highlands & Resorts",
      date: "May 18, 2025",
      month: "May",
      year: "2025",
      description:
        "First ride ko kay LUNA. First time din gumamit ng roadbike <3",
      image: "/public/images/May 2025 Rides/BosoBoso.jpg",
      category: "recent",
      photos: [
        "/images/May 2025 Rides/BosoBosoo.jpg",
        "/images/May 2025 Rides/BosoBoso.jpg",
        "/images/May 2025 Rides/BGC.jpg",
        "/images/May 2025 Rides/Taktak.jpg",
        "/images/May 2025 Rides/Taktak.jpg",
      ],
    },
    {
      id: 2,
      title: "Quick MOA RIDE",
      date: "May 23, 2025",
      month: "May",
      year: "2025",
      description:
        "A full day urban adventure exploring Manila's landmarks on two wheels.",
      image: "/placeholder.svg?height=250&width=400",
      category: "recent",
      photos: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 3,
      title: "MOA Loops",
      date: "May 25, 2025",
      month: "May",
      year: "2025",
      description: "Sakeeet nagasgasan ko si LUNA ;(",
      image: "/placeholder.svg?height=250&width=400",
      category: "favorites",
      photos: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 4,
      title: "Hinulugang Taktak Ride",
      date: "June 15, 2025",
      month: "June",
      year: "2025",
      description: "Nakabalik din after 3 months sa Taktak <3",
      image: "/placeholder.svg?height=250&width=400",
      category: "favorites",
      photos: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 5,
      title: "UP Diliman x15 Loop",
      date: "June 19, 2025",
      month: "June",
      year: "2025",
      description: "Daming humps at tao. Hindi ako makasprint HAHAHA",
      image: "/placeholder.svg?height=250&width=400",
      category: "recent",
      photos: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 6,
      title: "x25 UP Diliman Loop",
      date: "June 23, 2025",
      month: "September",
      year: "2025",
      description: "Leg Crampss",
      image: "/placeholder.svg?height=250&width=400",
      category: "favorites",
      photos: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 7,
      title: "Biglaang Ride",
      date: "July 7, 2025",
      month: "July",
      year: "2025",
      description: "2 days after graduation. Naistress ako sa gupet ko huhu.",
      image: "/placeholder.svg?height=250&width=400",
      category: "recent",
      photos: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 8,
      title: "Morning Exercise x Foodpanda",
      date: "July 13, 2025",
      month: "July",
      year: "2025",
      description: "Literal na kape sabay uwi",
      image: "/placeholder.svg?height=250&width=400",
      category: "favorites",
      photos: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 9,
      title: "Foodpanda > UP > Riverbanks",
      date: "July 15, 2025",
      month: "July",
      year: "2025",
      description: "Kamustahan with Friends.",
      image: "/placeholder.svg?height=250&width=400",
      category: "favorites",
      photos: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 10,
      title: "Back to Zero",
      date: "July 30, 2025",
      month: "July",
      year: "2025",
      description: "3 weeks ba naman walang tigil ang ulan eh.",
      image: "/placeholder.svg?height=250&width=400",
      category: "favorites",
      photos: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 11,
      title: "Boso-boso Ride",
      date: "August 3, 2025",
      month: "August",
      year: "2025",
      description: "Back to zero.",
      image: "/placeholder.svg?height=250&width=400",
      category: "favorites",
      photos: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 12,
      title: "UP Oval Loop",
      date: "August 6, 2025",
      month: "August",
      year: "2025",
      description: "Day 2 sa pagbabalik",
      image: "/placeholder.svg?height=250&width=400",
      category: "favorites",
      photos: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    {
      id: 13,
      title: "Quick UP Loop",
      date: "August 11, 2025",
      month: "August",
      year: "2025",
      description: "Umuulan huhu.",
      image: "/photos/UPUlan1.jfif",
      category: "favorites",
      photos: [
        "/photos/UPUlan2.jfif",
        "/photos/UPUlan3.jfif",
        "/photos/UPUlan4.jfif",
        "/photos/UPUlan5.jfif",
      ],
    },
    {
      id: 14,
      title: "Antipolo Ride",
      date: "August 17, 2025",
      month: "August",
      year: "2025",
      description: "Solo kasi tulog pa sila",
      image: "/photos/Antips1.jfif",
      category: "favorites",
      photos: [
        "/photos/Antips2.jfif",
        "/photos/Antips3.jfif",
        "/photos/Antips4.jfif",
        "/photos/Antips5.jfif",
      ],
    },

    {
      id: 15,
      title: "MOA Loops",
      date: "August 24, 2025",
      month: "August",
      year: "2025",
      description: "Ride kasama ang aking big brothers.",
      image: "/photos/MOA1.jfif",
      category: "favorites",
      photos: [
        "/photos/MOA2.jfif",
        "/photos/MOA3.jfif",
        "/photos/MOA4.jfif",
        "/photos/MOA5.jfif",
      ],
    },
    {
      id: 16,
      title: "x25 UP Diliman Loop",
      date: "August 29, 2025",
      month: "August",
      year: "2025",
      description: "Lupaypay talaga HAHAHAHA",
      image: "/photos/UPX25Loop2.jfif",
      category: "favorites",
      photos: [
        "/photos/UPX25Loop1.jfif",
        "/photos/UPX25Loop3.jfif",
        "/photos/UPX25Loop4.jfif",
        "/photos/UPX25Loop5.jfif",
      ],
    },
    {
      id: 17,
      title: "Sunday Exercise",
      date: "August 31, 2025",
      month: "August",
      year: "2025",
      description: "As Always.",
      image: "/photos/AsAlways1.jfif",
      category: "recent",
      photos: [
        "/photos/AsAlways2.jfif",
        "/photos/AsAlways3.jfif",
        "/photos/AsAlways4.jfif",
        "/photos/AsAlways5.jfif",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("adventures");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const scrollToSectionTitle = () => {
    const element = document.getElementById("adventures");
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const getFilteredRides = () => {
    let filtered = rides;

    // Filter by tab
    if (activeTab !== "all") {
      filtered = filtered.filter((ride) => ride.category === activeTab);
    }

    // Filter by month/year
    if (selectedMonth && selectedYear) {
      filtered = filtered.filter(
        (ride) => ride.month === selectedMonth && ride.year === selectedYear
      );
    }

    return filtered;
  };

  const getPaginatedRides = () => {
    const filtered = getFilteredRides();
    const startIndex = (currentPage - 1) * ridesPerPage;
    return filtered.slice(startIndex, startIndex + ridesPerPage);
  };

  const getTotalPages = () => {
    return Math.ceil(getFilteredRides().length / ridesPerPage);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const handleMonthYearChange = () => {
    setCurrentPage(1);
  };

  const handlePrevPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newPage = Math.max(currentPage - 1, 1);
    setCurrentPage(newPage);
    setTimeout(() => {
      scrollToSectionTitle();
    }, 100);
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newPage = Math.min(currentPage + 1, getTotalPages());
    setCurrentPage(newPage);
    setTimeout(() => {
      scrollToSectionTitle();
    }, 100);
  };

  const getAvailableMonths = (year) => {
    if (year === "2025") {
      return [
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    }
    return [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
  };

  return (
    <section
      id="adventures"
      className={`section adventures-section ${isVisible ? "animate" : ""}`}
    >
      <div className="section-background">
        <div
          className="floating-element"
          style={{
            top: "10%",
            left: "5%",
            width: "100px",
            height: "100px",
            background:
              "radial-gradient(circle, rgba(0, 180, 255, 0.08), transparent)",
          }}
        ></div>
        <div
          className="floating-element"
          style={{
            bottom: "15%",
            right: "8%",
            width: "80px",
            height: "80px",
            background:
              "radial-gradient(circle, rgba(0, 212, 170, 0.06), transparent)",
          }}
        ></div>
      </div>
      <div className="container">
        <h2
          className={`section-title animate-on-scroll ${
            isVisible ? "animate" : ""
          }`}
        >
          Adventures
        </h2>

        <div
          className={`adventure-tabs animate-on-scroll animate-delay-1 ${
            isVisible ? "animate" : ""
          }`}
        >
          <button
            className={`tab-btn ${activeTab === "all" ? "active" : ""}`}
            onClick={() => handleTabChange("all")}
          >
            All Rides
          </button>
          <button
            className={`tab-btn ${activeTab === "recent" ? "active" : ""}`}
            onClick={() => handleTabChange("recent")}
          >
            Recent
          </button>
          <button
            className={`tab-btn ${activeTab === "favorites" ? "active" : ""}`}
            onClick={() => handleTabChange("favorites")}
          >
            Favorites
          </button>
        </div>

        <div
          className={`month-year-filter animate-on-scroll animate-delay-2 ${
            isVisible ? "animate" : ""
          }`}
        >
          <select
            value={selectedYear}
            onChange={(e) => {
              setSelectedYear(e.target.value);
              handleMonthYearChange();
            }}
            className="filter-select"
          >
            <option value="2025">2025</option>
            <option value="2026">2026</option>
            <option value="2027">2027</option>
            <option value="2028">2028</option>
            <option value="2029">2029</option>
            <option value="2030">2030</option>
          </select>

          <select
            value={selectedMonth}
            onChange={(e) => {
              setSelectedMonth(e.target.value);
              handleMonthYearChange();
            }}
            className="filter-select"
          >
            <option value="">All Months</option>
            {getAvailableMonths(selectedYear).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="adventure-grid">
          {getPaginatedRides().map((ride, index) => (
            <div
              key={ride.id}
              className={`animate-on-scroll animate-delay-${Math.min(
                index + 3,
                6
              )} ${isVisible ? "animate" : ""}`}
            >
              <Card
                ride={ride}
                index={index}
                onClick={() => setSelectedRide(ride)}
              />
            </div>
          ))}
        </div>

        {getTotalPages() > 1 && (
          <div
            className={`pagination animate-on-scroll animate-delay-4 ${
              isVisible ? "animate" : ""
            }`}
          >
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="pagination-btn"
              type="button"
            >
              ← Previous
            </button>
            <span className="pagination-info">
              Page {currentPage} of {getTotalPages()}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === getTotalPages()}
              className="pagination-btn"
              type="button"
            >
              Next →
            </button>
          </div>
        )}
      </div>

      {selectedRide && (
        <Modal ride={selectedRide} onClose={() => setSelectedRide(null)} />
      )}
    </section>
  );
};

export default Adventures;
