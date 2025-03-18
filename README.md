# MediMind

An advanced AI medical assistant for enhanced clinical decision-making.

## Important Note

The full project code is available in this repository. If you need the complete project, please clone this repository:

```bash
git clone https://github.com/DevoteAI/MediMind-main-.git
cd MediMind-main-
npm install
```

## Getting Started

1. Make sure you have Node.js installed (v16+)
2. Clone the repository as shown above
3. Install dependencies with `npm install`
4. Create a Supabase project and add your credentials to `.env` file
5. Run the development server with `npm run dev`

## Environment Variables

Create a `.env` file with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Features

- AI-powered medical assistance
- Real-time bed management
- Voice-enabled note-taking
- Seamless shift handovers
- ABG Analysis with AI interpretation
- Patient data management
- Clinical notes system
- ECG analysis
- MediVoice transcription

## Technology Stack

- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Supabase for backend
- Zustand for state management
- TipTap for rich text editing
- React Router for navigation

## Project Structure

- `/src/components` - UI components
- `/src/hooks` - Custom React hooks
- `/src/lib` - Utility libraries
- `/src/store` - Zustand state stores
- `/src/types` - TypeScript type definitions
- `/src/utils` - Helper functions
- `/src/contexts` - React contexts
- `/src/i18n` - Internationalization
- `/src/pages` - Page components

## License

MIT
