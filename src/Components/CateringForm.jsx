import React, { useState } from "react";
import { ArrowLeft, Utensils, ChefHat, Users, Banknote, X, Pen } from "lucide-react";

// Form steps based on catering details
const steps = [
  "Vendor Details",
  "Contact Information",
  "Business & Legal",
  "Cuisine & Menu",
  "Capacity & Service",
  "Pricing Details",
  "Hygiene & Quality",
  "Service Coverage",
  "Experience",
  "Bank Details",
  "Declaration"
];

// Catering types
const cateringTypes = [
  "Vegetarian",
  "Non-Vegetarian",
  "Both",
  "Jain Food",
  "Continental"
];

// Cuisines offered
const cuisines = [
  "South Indian",
  "North Indian",
  "Chinese",
  "Continental",
  "Arabic"
];

// Special menus
const specialMenus = [
  "Wedding Feast",
  "Reception",
  "Engagement",
  "Sangeet / Mehendi",
  "Buffet",
  "Live Counters"
];

// Service types
const serviceTypes = [
  "Buffet",
  "Banana Leaf Service",
  "Table Service"
];

// Business types
const businessTypes = [
  "Individual",
  "Proprietorship",
  "Partnership",
  "Private Limited"
];

// Preferred locations
const locations = [
  "Local",
  "Within District",
  "Outstation"
];

export default function CateringVendorModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [isDrawing, setIsDrawing] = useState(false);
  const canvasRef = React.useRef(null);
  const [formData, setFormData] = useState({
    // Step 1
    vendorName: "",
    proprietorName: "",
    selectedCateringTypes: [],
    otherCateringType: "",
    
    // Step 2
    mobile: "",
    alternateMobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    
    // Step 3
    businessType: "",
    gstNumber: "",
    panNumber: "",
    fssaiNumber: "",
    experience: "",
    
    // Step 4
    selectedCuisines: [],
    otherCuisine: "",
    selectedSpecialMenus: [],
    
    // Step 5
    minCapacity: "",
    maxCapacity: "",
    selectedServiceType: "",
    hasServingStaff: "",
    hasUniformedStaff: "",
    
    // Step 6
    minPrice: "",
    maxPrice: "",
    hasAdvancePayment: "",
    advancePercent: "",
    paymentTerms: "",
    
    // Step 7
    hasFssaiCompliance: "",
    foodPrepLocation: "",
    hasWaterSource: "",
    hasWasteManagement: "",
    
    // Step 8
    preferredLocations: [],
    hasTransportCharges: "",
    
    // Step 9
    weddingsCatered: "",
    references: "",
    
    // Step 10
    accountName: "",
    bankName: "",
    accountNumber: "",
    ifscCode: "",
    upiId: "",
    
    // Step 11
    declaration: false
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleArrayToggle = (arrayName, item) => {
    setFormData(prev => {
      const array = [...prev[arrayName]];
      if (array.includes(item)) {
        return { ...prev, [arrayName]: array.filter(i => i !== item) };
      } else {
        return { ...prev, [arrayName]: [...array, item] };
      }
    });
  };

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    
    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;
    
    const ctx = canvas.getContext('2d');
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#991B1B';
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleSubmit = () => {
    console.log("Catering form submitted:", formData);
    alert("Catering Registration submitted successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-2 sm:p-4">
      {/* Reduced width for desktop */}
      <div className="bg-gradient-to-b from-red-50 to-yellow-50 w-full max-w-lg rounded-xl shadow-2xl flex flex-col max-h-[95vh] sm:max-h-[90vh] lg:max-h-[90vh] border border-red-200">

        {/* Top Bar */}
        <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 rounded-t-xl flex items-center gap-3 px-4 py-3 sm:py-3 shrink-0">
          <button 
            onClick={onClose} 
            className="shrink-0 text-yellow-200 hover:text-yellow-300 hover:scale-110 transition-transform duration-200"
          >
            <ArrowLeft className="w-5 h-5 sm:w-5 sm:h-5" />
          </button>
          <h2 className="font-pacifico font-semibold text-sm sm:text-base text-yellow-50 truncate">
            Catering Vendor Registration
          </h2>
          <button 
            onClick={onClose} 
            className="ml-auto shrink-0 text-yellow-200 hover:text-yellow-300 hover:scale-110 transition-transform duration-200 lg:hidden"
          >
            <X className="w-5 h-5 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Steps */}
        <div className="bg-gradient-to-r from-red-600/90 to-red-700/90 px-3 py-2 sm:py-2 shrink-0 overflow-x-auto">
          <div className="flex items-start justify-between">
            {steps.map((s, i) => (
              <div key={i} className="flex-1 flex flex-col items-center min-w-[50px] sm:min-w-0">
                <div
                  className={`w-6 h-6 sm:w-6 sm:h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                    i <= step
                      ? "bg-gradient-to-br from-yellow-400 to-yellow-600 text-red-900 shadow-lg"
                      : "bg-red-800/50 text-yellow-100"
                  }`}
                >
                  {i + 1}
                </div>
                <p
                  className={`text-[9px] sm:text-[10px] mt-1 text-center font-medium ${
                    i === step
                      ? "text-yellow-300 font-semibold"
                      : "text-yellow-100/80"
                  }`}
                >
                  {s}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SCROLLABLE CONTENT - Improved layout */}
        <div className="px-4 py-4 sm:py-5 space-y-4 overflow-y-auto flex-1">
          {/* STEP 1: Vendor Details */}
          {step === 0 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3">
                <h3 className="text-white font-bold text-center text-sm flex items-center justify-center">
                  <Utensils className="inline w-4 h-4 mr-2" />
                  Vendor Basic Details
                </h3>
              </div>
              
              <div className="form-group">
                <label className="form-label">Catering Company / Vendor Name *</label>
                <input 
                  name="vendorName"
                  value={formData.vendorName}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter catering company or vendor name" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Proprietor / Contact Person Name *</label>
                <input 
                  name="proprietorName"
                  value={formData.proprietorName}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter proprietor or contact person name" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Type of Catering *</label>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    {cateringTypes.map(type => (
                      <label key={type} className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                        <input 
                          type="checkbox" 
                          checked={formData.selectedCateringTypes.includes(type)}
                          onChange={() => handleArrayToggle('selectedCateringTypes', type)}
                          className="w-3.5 h-3.5 accent-red-600" 
                        /> 
                        <span className="text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-2 mt-3">
                    <label className="text-xs font-semibold text-red-700 whitespace-nowrap">Other:</label>
                    <input 
                      name="otherCateringType"
                      value={formData.otherCateringType}
                      onChange={handleInputChange}
                      className="input-field flex-1 text-sm" 
                      placeholder="Specify other catering type" 
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Contact Information */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3">
                <h3 className="text-white font-bold text-center text-sm">
                  Contact Information
                </h3>
              </div>
              
              <div className="form-group">
                <label className="form-label">Mobile Number *</label>
                <input 
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter mobile number" 
                  type="tel"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Alternate Mobile Number</label>
                <input 
                  name="alternateMobile"
                  value={formData.alternateMobile}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter alternate mobile number" 
                  type="tel"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Email ID *</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter email address" 
                  type="email"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Office Address *</label>
                <input 
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter office address" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="form-group">
                  <label className="form-label">City / District *</label>
                  <input 
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="input-field" 
                    placeholder="Enter city" 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">State *</label>
                  <input 
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="input-field" 
                    placeholder="Enter state" 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">PIN Code *</label>
                <input 
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter PIN code" 
                />
              </div>
            </div>
          )}

          {/* STEP 3: Business & Legal Details */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3">
                <h3 className="text-white font-bold text-center text-sm">
                  Business & Legal Details
                </h3>
              </div>
              
              <div className="form-group">
                <label className="form-label">Business Type *</label>
                <div className="grid grid-cols-2 gap-2">
                  {businessTypes.map(type => (
                    <label key={type} className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="radio" 
                        name="businessType" 
                        value={type}
                        checked={formData.businessType === type}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">GST Number (if applicable)</label>
                <input 
                  name="gstNumber"
                  value={formData.gstNumber}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter GST number" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">PAN Number *</label>
                <input 
                  name="panNumber"
                  value={formData.panNumber}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter PAN number" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">FSSAI License Number *</label>
                <input 
                  name="fssaiNumber"
                  value={formData.fssaiNumber}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter FSSAI license number" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Years of Experience *</label>
                <input 
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter years of experience" 
                  type="number"
                />
              </div>
            </div>
          )}

          {/* STEP 4: Cuisine & Menu Details */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3">
                <h3 className="text-white font-bold text-center text-sm flex items-center justify-center">
                  <ChefHat className="inline w-4 h-4 mr-2" />
                  Cuisine & Menu Details
                </h3>
              </div>
              
              <div className="form-group">
                <label className="form-label">Cuisines Offered *</label>
                <div className="grid grid-cols-2 gap-2">
                  {cuisines.map(cuisine => (
                    <label key={cuisine} className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="checkbox" 
                        checked={formData.selectedCuisines.includes(cuisine)}
                        onChange={() => handleArrayToggle('selectedCuisines', cuisine)}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">{cuisine}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Other Cuisine</label>
                <input 
                  name="otherCuisine"
                  value={formData.otherCuisine}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Specify other cuisine" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Special Menus Available *</label>
                <div className="grid grid-cols-2 gap-2">
                  {specialMenus.map(menu => (
                    <label key={menu} className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="checkbox" 
                        checked={formData.selectedSpecialMenus.includes(menu)}
                        onChange={() => handleArrayToggle('selectedSpecialMenus', menu)}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">{menu}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: Capacity & Service Details */}
          {step === 4 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3">
                <h3 className="text-white font-bold text-center text-sm flex items-center justify-center">
                  <Users className="inline w-4 h-4 mr-2" />
                  Capacity & Service Details
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="form-group">
                  <label className="form-label">Minimum Plate Capacity *</label>
                  <input 
                    name="minCapacity"
                    value={formData.minCapacity}
                    onChange={handleInputChange}
                    className="input-field" 
                    placeholder="Enter minimum capacity" 
                    type="number"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Maximum Plate Capacity *</label>
                  <input 
                    name="maxCapacity"
                    value={formData.maxCapacity}
                    onChange={handleInputChange}
                    className="input-field" 
                    placeholder="Enter maximum capacity" 
                    type="number"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Service Type *</label>
                <div className="flex flex-wrap gap-3">
                  {serviceTypes.map(type => (
                    <label key={type} className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="radio" 
                        name="selectedServiceType" 
                        value={type}
                        checked={formData.selectedServiceType === type}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="form-group">
                  <label className="form-label">Serving Staff Provided *</label>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="radio" 
                        name="hasServingStaff" 
                        value="yes"
                        checked={formData.hasServingStaff === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="radio" 
                        name="hasServingStaff" 
                        value="no"
                        checked={formData.hasServingStaff === "no"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Uniformed Staff *</label>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="radio" 
                        name="hasUniformedStaff" 
                        value="yes"
                        checked={formData.hasUniformedStaff === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="radio" 
                        name="hasUniformedStaff" 
                        value="no"
                        checked={formData.hasUniformedStaff === "no"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: Pricing Details */}
          {step === 5 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3">
                <h3 className="text-white font-bold text-center text-sm flex items-center justify-center">
                  <Banknote className="inline w-4 h-4 mr-2" />
                  Pricing Details
                </h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="form-group">
                  <label className="form-label">Min Price per Plate (₹)</label>
                  <input 
                    name="minPrice"
                    value={formData.minPrice}
                    onChange={handleInputChange}
                    className="input-field" 
                    placeholder="Enter minimum price" 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Max Price per Plate (₹)</label>
                  <input 
                    name="maxPrice"
                    value={formData.maxPrice}
                    onChange={handleInputChange}
                    className="input-field" 
                    placeholder="Enter maximum price" 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Advance Payment Required *</label>
                <div className="flex gap-3">
                  <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                    <input 
                      type="radio" 
                      name="hasAdvancePayment" 
                      value="yes"
                      checked={formData.hasAdvancePayment === "yes"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                    <input 
                      type="radio" 
                      name="hasAdvancePayment" 
                      value="no"
                      checked={formData.hasAdvancePayment === "no"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
                
                {formData.hasAdvancePayment === "yes" && (
                  <div className="form-group mt-3">
                    <label className="form-label">Advance Percentage</label>
                    <input 
                      name="advancePercent"
                      value={formData.advancePercent}
                      onChange={handleInputChange}
                      className="input-field" 
                      placeholder="Enter advance percentage" 
                    />
                  </div>
                )}
              </div>
              
              <div className="form-group">
                <label className="form-label">Balance Payment Terms</label>
                <input 
                  name="paymentTerms"
                  value={formData.paymentTerms}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter payment terms" 
                />
              </div>
            </div>
          )}

          {/* STEP 7: Hygiene & Quality Assurance */}
          {step === 6 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3">
                <h3 className="text-white font-bold text-center text-sm">
                  Hygiene & Quality Assurance
                </h3>
              </div>
              
              <div className="form-group">
                <label className="form-label">FSSAI Compliance *</label>
                <div className="flex gap-3">
                  <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                    <input 
                      type="radio" 
                      name="hasFssaiCompliance" 
                      value="yes"
                      checked={formData.hasFssaiCompliance === "yes"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                    <input 
                      type="radio" 
                      name="hasFssaiCompliance" 
                      value="no"
                      checked={formData.hasFssaiCompliance === "no"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Food Preparation Location *</label>
                <input 
                  name="foodPrepLocation"
                  value={formData.foodPrepLocation}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter food preparation location" 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="form-group">
                  <label className="form-label">Water Source (RO/Mineral) *</label>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="radio" 
                        name="hasWaterSource" 
                        value="yes"
                        checked={formData.hasWaterSource === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="radio" 
                        name="hasWaterSource" 
                        value="no"
                        checked={formData.hasWaterSource === "no"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>
                
                <div className="form-group">
                  <label className="form-label">Waste Management Arranged *</label>
                  <div className="flex gap-3">
                    <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="radio" 
                        name="hasWasteManagement" 
                        value="yes"
                        checked={formData.hasWasteManagement === "yes"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="radio" 
                        name="hasWasteManagement" 
                        value="no"
                        checked={formData.hasWasteManagement === "no"}
                        onChange={handleInputChange}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 8: Service Coverage */}
          {step === 7 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3">
                <h3 className="text-white font-bold text-center text-sm">
                  Service Coverage
                </h3>
              </div>
              
              <div className="form-group">
                <label className="form-label">Preferred Locations *</label>
                <div className="grid grid-cols-2 gap-2">
                  {locations.map(location => (
                    <label key={location} className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                      <input 
                        type="checkbox" 
                        checked={formData.preferredLocations.includes(location)}
                        onChange={() => handleArrayToggle('preferredLocations', location)}
                        className="w-3.5 h-3.5 accent-red-600" 
                      /> 
                      <span className="text-gray-700">{location}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">Transportation Charges Applicable *</label>
                <div className="flex gap-3">
                  <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                    <input 
                      type="radio" 
                      name="hasTransportCharges" 
                      value="yes"
                      checked={formData.hasTransportCharges === "yes"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    <span className="text-gray-700">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 text-xs bg-red-50 p-2 rounded border border-red-100 hover:bg-red-100 cursor-pointer transition-colors">
                    <input 
                      type="radio" 
                      name="hasTransportCharges" 
                      value="no"
                      checked={formData.hasTransportCharges === "no"}
                      onChange={handleInputChange}
                      className="w-3.5 h-3.5 accent-red-600" 
                    /> 
                    <span className="text-gray-700">No</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* STEP 9: Previous Experience */}
          {step === 8 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3">
                <h3 className="text-white font-bold text-center text-sm">
                  Previous Experience & References
                </h3>
              </div>
              
              <div className="form-group">
                <label className="form-label">Number of Weddings Catered</label>
                <input 
                  name="weddingsCatered"
                  value={formData.weddingsCatered}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter number of weddings catered" 
                  type="number"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Major Clients / References (if any)</label>
                <textarea 
                  name="references"
                  value={formData.references}
                  onChange={handleInputChange}
                  className="input-field min-h-[100px]" 
                  placeholder="Enter references" 
                />
              </div>
            </div>
          )}

          {/* STEP 10: Bank Details */}
          {step === 9 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3">
                <h3 className="text-white font-bold text-center text-sm flex items-center justify-center">
                  <Banknote className="inline w-4 h-4 mr-2" />
                  Bank Details (For Payments)
                </h3>
              </div>
              
              <div className="form-group">
                <label className="form-label">Account Holder Name *</label>
                <input 
                  name="accountName"
                  value={formData.accountName}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter account holder name" 
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Bank Name *</label>
                <input 
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter bank name" 
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="form-group">
                  <label className="form-label">Account Number *</label>
                  <input 
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    className="input-field" 
                    placeholder="Enter account number" 
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">IFSC Code *</label>
                  <input 
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleInputChange}
                    className="input-field" 
                    placeholder="Enter IFSC code" 
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label className="form-label">UPI ID (Optional)</label>
                <input 
                  name="upiId"
                  value={formData.upiId}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Enter UPI ID" 
                />
              </div>
            </div>
          )}

          {/* STEP 11: Declaration */}
          {step === 10 && (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-lg p-3">
                <h3 className="text-white font-bold text-center text-sm">
                  Declaration
                </h3>
              </div>
              
              <div className="bg-gradient-to-r from-red-100 to-yellow-50 rounded-lg p-4 border border-red-200">
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  I hereby declare that the above information is true and correct. 
                  I agree to provide catering services for marriage functions as per 
                  agreed menu, quality, hygiene standards, and terms.
                </p>
                
                <div className="space-y-4">
                  <label className="flex items-center gap-2 text-sm bg-red-50 p-3 rounded border border-red-100">
                    <input 
                      type="checkbox" 
                      name="declaration"
                      checked={formData.declaration}
                      onChange={handleInputChange}
                      className="w-4 h-4 accent-red-600" 
                    />
                    <span className="font-semibold text-red-700">I accept the terms and conditions *</span>
                  </label>
                  
                  <div className="form-group">
                    <label className="form-label flex items-center gap-2">
                      <Pen className="w-4 h-4 text-red-600" />
                      Vendor Signature *
                    </label>
                    <p className="text-xs text-gray-600 mb-2">Draw your signature in the white space below</p>
                    <div className="relative">
                      <canvas
                        ref={canvasRef}
                        width={400}
                        height={150}
                        onMouseDown={startDrawing}
                        onMouseMove={draw}
                        onMouseUp={stopDrawing}
                        onMouseLeave={stopDrawing}
                        onTouchStart={(e) => {
                          e.preventDefault();
                          startDrawing(e);
                        }}
                        onTouchMove={(e) => {
                          e.preventDefault();
                          draw(e);
                        }}
                        onTouchEnd={stopDrawing}
                        className="signature-canvas"
                      />
                      <button
                        type="button"
                        onClick={clearSignature}
                        className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded text-xs hover:bg-red-700 transition-colors flex items-center gap-1"
                      >
                        <Pen className="w-3 h-3" />
                        Clear Signature
                      </button>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="form-group">
                      <label className="form-label">Date *</label>
                      <input 
                        className="input-field" 
                        placeholder="Select date" 
                        type="date"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Place *</label>
                      <input 
                        className="input-field" 
                        placeholder="Enter place" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex gap-3 p-4 border-t border-red-200 bg-gradient-to-r from-red-50 to-yellow-50 shrink-0 rounded-b-xl">
          {step > 0 && (
            <button 
              className="btn-outline-red text-sm px-3 py-2" 
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}
          
          <button
            className="btn-primary-red ml-auto text-sm px-3 py-2"
            onClick={() => (step === 10 ? handleSubmit() : setStep(step + 1))}
            disabled={step === 10 && !formData.declaration}
          >
            {step === 10 ? "Submit Registration" : "Continue"}
          </button>
        </div>

      </div>

      <style jsx>{`
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .form-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #991B1B;
          padding-left: 0.25rem;
        }
        
        .input-field {
          width: 100%;
          padding: 0.75rem 1rem;
          border: 1.5px solid #DC2626;
          border-radius: 0.5rem;
          font-size: 0.875rem;
          background: white;
          transition: all 0.3s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        textarea.input-field {
          min-height: 80px;
          resize: vertical;
        }
        
        .input-field:focus {
          outline: none;
          border-color: #B91C1C;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);
        }
        
        .input-field::placeholder {
          color: #9CA3AF;
          font-size: 0.875rem;
        }
        
        .btn-primary-red {
          background: linear-gradient(135deg, #DC2626, #B91C1C);
          color: white;
          font-weight: 600;
          border-radius: 0.5rem;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 4px rgba(220, 38, 38, 0.3);
        }
        
        .btn-primary-red:hover:not(:disabled) {
          background: linear-gradient(135deg, #B91C1C, #991B1B);
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(220, 38, 38, 0.4);
        }
        
        .btn-primary-red:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }
        
        .btn-outline-red {
          background: transparent;
          color: #DC2626;
          font-weight: 600;
          border: 1.5px solid #DC2626;
          border-radius: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .btn-outline-red:hover {
          background: #FEE2E2;
          transform: translateY(-1px);
          box-shadow: 0 2px 6px rgba(220, 38, 38, 0.2);
        }
        
        .signature-canvas {
          width: 100%;
          height: 150px;
          border: 1.5px solid #DC2626;
          border-radius: 0.5rem;
          background: white;
          cursor: crosshair;
          touch-action: none;
        }
      `}</style>
    </div>
  );
}