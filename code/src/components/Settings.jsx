import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import './Settings.css';

export default function Settings() {
  const { dark, setTheme } = useContext(ThemeContext);
  const [settings, setSettings] = useState({
    notifications: true,
    emailReports: false,
    darkMode: false,
    dataRetention: '6months',
    timezone: 'UTC-8',
    language: 'en'
  });
  const [toast, setToast] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem('app_settings');
      if (raw) {
        const parsed = JSON.parse(raw);
  setSettings(prev => ({ ...prev, ...parsed }));
  if (typeof parsed.darkMode === 'boolean') setTheme(parsed.darkMode);
      }
    } catch (e) {
      console.warn('Failed to load settings', e);
    }
  }, [setTheme]);

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2000);
  };

  const saveSettings = () => {
    try {
      localStorage.setItem('app_settings', JSON.stringify(settings));
  // reflect dark mode immediately via theme context
  setTheme(settings.darkMode);
      showToast('Settings saved');
    } catch (e) {
      console.error('Failed to save settings', e);
      showToast('Failed to save');
    }
  };

  const resetDefaults = () => {
    const defaults = {
      notifications: true,
      emailReports: false,
      darkMode: false,
      dataRetention: '6months',
      timezone: 'UTC-8',
      language: 'en'
    };
    setSettings(defaults);
    localStorage.setItem('app_settings', JSON.stringify(defaults));
  setTheme(false);
    showToast('Settings reset');
  };

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1>Settings</h1>
        <p>Customize your dashboard experience</p>
      </div>
      
      <div className="settings-sections">
        <div className="card settings-section">
          <h2>Notifications</h2>
          <div className="setting-item">
            <div className="setting-info">
              <label>Push Notifications</label>
              <span>Receive real-time alerts for important events</span>
            </div>
            <label className="toggle">
              <input 
                type="checkbox" 
                checked={settings.notifications}
                onChange={(e) => handleSettingChange('notifications', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <label>Email Reports</label>
              <span>Get weekly performance reports via email</span>
            </div>
            <label className="toggle">
              <input 
                type="checkbox" 
                checked={settings.emailReports}
                onChange={(e) => handleSettingChange('emailReports', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="card settings-section">
          <h2>Appearance</h2>
          <div className="setting-item">
            <div className="setting-info">
              <label>Dark Mode</label>
              <span>Switch to dark theme for better night viewing</span>
            </div>
            <label className="toggle">
              <input 
                type="checkbox" 
                checked={settings.darkMode ?? dark}
                onChange={(e) => handleSettingChange('darkMode', e.target.checked)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="card settings-section">
          <h2>Data & Privacy</h2>
          <div className="setting-item">
            <div className="setting-info">
              <label>Data Retention</label>
              <span>How long to keep your analytics data</span>
            </div>
            <select 
              value={settings.dataRetention}
              onChange={(e) => handleSettingChange('dataRetention', e.target.value)}
            >
              <option value="3months">3 months</option>
              <option value="6months">6 months</option>
              <option value="1year">1 year</option>
              <option value="2years">2 years</option>
            </select>
          </div>
        </div>

        <div className="card settings-section">
          <h2>Localization</h2>
          <div className="setting-item">
            <div className="setting-info">
              <label>Timezone</label>
              <span>Set your local timezone for accurate reporting</span>
            </div>
            <select 
              value={settings.timezone}
              onChange={(e) => handleSettingChange('timezone', e.target.value)}
            >
              <option value="UTC-8">Pacific Time (UTC-8)</option>
              <option value="UTC-5">Eastern Time (UTC-5)</option>
              <option value="UTC+0">UTC (GMT)</option>
              <option value="UTC+1">Central European Time (UTC+1)</option>
            </select>
          </div>
          
          <div className="setting-item">
            <div className="setting-info">
              <label>Language</label>
              <span>Choose your preferred language</span>
            </div>
            <select 
              value={settings.language}
              onChange={(e) => handleSettingChange('language', e.target.value)}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>

        <div className="settings-actions">
          <button className="btn-primary" onClick={saveSettings}>Save Changes</button>
          <button className="btn-secondary" onClick={resetDefaults}>Reset to Defaults</button>
        </div>
      </div>
      {toast && <div className="toast" role="status" aria-live="polite">{toast}</div>}
    </div>
  );
}
