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
      date: "May 2025",
      month: "May",
      year: "2025",
      description:
        "LUNA's first major ride - Training muna kung paano i-handle ang roadbike haha.",
      image: "/public/images/May 2025 Rides/BosoBoso.jpg",
      category: "recent",
      photos: [
        "/public/images/May 2025 Rides/BosoBosoo.jpg",
        "/public/images/May 2025 Rides/BosoBoso.jpg",
        "/public/images/May 2025 Rides/BGC.jpg",
        "/public/images/May 2025 Rides/Taktak.jpg",
        "/public/images/May 2025 Rides/Taktak.jpg",
      ],
    },
    {
      id: 2,
      title: "Antipolo > Intramuros > MOA > BGC",
      date: "June 2025",
      month: "June",
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
      title: "Taktak Antipolo > UP Oval",
      date: "June 2025",
      month: "June",
      year: "2025",
      description:
        "Morning ride from Antipolo to the historic UP Oval, perfect for interval training.",
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
      title: "Marikina River Park Loop",
      date: "July 2025",
      month: "July",
      year: "2025",
      description: "Peaceful riverside cycling with beautiful sunset views.",
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
      title: "Tagaytay Ridge Adventure",
      date: "August 2025",
      month: "August",
      year: "2025",
      description: "Cool mountain air and breathtaking views of Taal Lake.",
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
      title: "Laguna Loop Challenge",
      date: "September 2025",
      month: "September",
      year: "2025",
      description: "Epic 100km ride through scenic Laguna countryside.",
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
      title: "Bataan Peninsula Ride",
      date: "October 2025",
      month: "October",
      year: "2025",
      description: "Historical coastal ride with amazing ocean views.",
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
      title: "Rizal Province Tour",
      date: "November 2025",
      month: "November",
      year: "2025",
      description: "Multi-day adventure through Rizal's scenic mountains.",
      image: "/placeholder.svg?height=250&width=400",
      category: "favorites",
      photos: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
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
