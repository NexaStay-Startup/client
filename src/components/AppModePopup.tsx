import React, { useState } from 'react';
import TrSun from '../svgs/transparent/TrSun';
import TrMoon from '../svgs/transparent/TrMoon';
import TrSystem from '../svgs/transparent/TrSystem';

interface AppModePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onAppModeChange: (appMode: string) => void;
  currentAppMode: string;
}

interface AppMode {
  code: string;
  name: string;
  icon: React.ComponentType;
}

const appModes: AppMode[] = [
  {
    code: 'light',
    name: 'Light',
    icon: TrSun
  },
  {
    code: 'dark',
    name: 'Dark',
    icon: TrMoon
  },
  {
    code: 'system',
    name: 'System',
    icon: TrSystem
  }
];

export default function AppModePopup({ isOpen, onClose, onAppModeChange, currentAppMode = 'system' }: AppModePopupProps) {
  const [selectedAppMode, setSelectedAppMode] = useState(currentAppMode);

    const handleAppModeSelect = (appModeCode: string) => {
    setSelectedAppMode(appModeCode);
    onAppModeChange(appModeCode);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
    {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-transparent z-40"
        onClick={onClose}
      />

      {/* Popup */}
      <div className="fixed top-[54px] right-[48px] z-50">
        <div className="bg-white border border-slate-300 rounded-3xl p-[14px] shadow-lg min-w-[180px]">
          <div className="flex flex-col gap-[2px]">
            {appModes.map((appMode) => (
              <button
                key={appMode.code}
                onClick={() => handleAppModeSelect(appMode.code)}
                className={`flex items-center gap-[10px] px-[8px] py-[4px] rounded-lg transition-all duration-200 hover:bg-slate-50 ${
                  selectedAppMode === appMode.code ? 'bg-slate-200' : ''
                }`}
              >
                {/* Theme Mode Icon */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <appMode.icon />
                </div>
                
                {/* Mode name */}
                <span className="text-sm font-normal text-slate-700 leading-5">
                  {appMode.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
