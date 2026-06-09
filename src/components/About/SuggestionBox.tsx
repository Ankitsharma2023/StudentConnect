
import { auth } from "@/auth";
import db from "@/lib/db";

export async function SuggestionBox() {
  const session = await auth();
  if (!session) return;

  return (
    <div className="bg-gray-50 p-8 border-t border-gray-100">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Leave a Suggestion</h2>
      <form action={async (e: FormData) => {
        'use server'
        const suggestion = e.get('suggestion') as string;
        if (suggestion) {
          try {
    
            const existingSuggestion = await db.suggestions.findUnique({
              where: { email: session?.user?.email || undefined },
            });
    
            if (existingSuggestion) {
    
              const updatedSuggestions = [...existingSuggestion.sug, suggestion];
    
              await db.suggestions.update({
                where: { email: session?.user?.email || undefined },
                data: {
                  sug: updatedSuggestions,
                },
              });
            } else {
    
              await db.suggestions.create({
                data: {
                  email: session?.user?.email || '',
                  sug: [suggestion],
                },
              });
            }
    
            console.log('Suggestion submitted successfully!');
          } catch (error) {
            console.error('Error submitting suggestion:', error);
          }
        }
      }}>
        <textarea
          name='suggestion'
          className="w-full px-4 py-3 rounded-lg border border-gray-200 
                   focus:ring-2 focus:ring-gray-400 focus:border-transparent
                   transition-all duration-300 resize-none h-32"
          placeholder="Share your Feedbacks or suggestions..."
        ></textarea>
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-gray-800 text-white rounded-lg
                   hover:bg-gray-700 transition-colors duration-300
                   focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          Submit Suggestion
        </button>
      </form>
    </div>
  );
}