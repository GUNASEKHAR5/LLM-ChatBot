import { tool } from 'ai';
import { z } from 'zod';

export const getTimeTable = tool({
  description: "Get the 6th Semester IT Timetable for Dec 2025 - Apr 2026 for CEG IT Batches.",
  inputSchema: z.object({
    batch: z.string().describe("The batch name: 'Batch I' or 'Batch II'"),
  }),
  execute: async ({ batch }) => {
    const timetableData: Record<string, any> = {
      "Batch I": {
        room: "KP206",
        monday: "IT23004 (Deep Learning) [8:30-10:15], IT23E01 (IoT) [10:30-11:20]",
        tuesday: "Skill Development Course II (Full Day)",
        wednesday: "IT23026 (Mobile Computing) [8:30-9:20], IT23602 (NLIP) [9:25-10:15], IT23601 (Distributed Systems) [10:30-11:20]",
        thursday: "IT23U02 (Sustainability) [8:30-9:20], IT23E01-Lab [11:25-2:00]",
        friday: "Open Elective [8:30-10:15], IT23602-Lab [2:05-4:45]"
      },
      "Batch II": {
        room: "KP207",
        monday: "IT23026 (Mobile Computing) [8:30-10:15], IT23601 (Distributed Systems) [10:30-11:20]",
        tuesday: "Skill Development Course II [8:30-10:15], IT23E01-Lab [10:30-1:10]",
        wednesday: "IT23U02 (Sustainability) [8:30-9:20], IT23602 (NLIP) [9:25-10:15], IT23601 (Distributed Systems) [10:30-11:20]",
        thursday: "IT23601 (Distributed Systems) [8:30-9:20], IT23026 (Mobile Computing) [9:25-10:15], Open Elective [10:30-12:15]",
        friday: "IT23602-Lab [8:30-11:20], Open Elective [11:25-1:10], IT23004 (Deep Learning) [2:05-2:55]"
      }
    };

    const schedule = timetableData[batch];
    if (!schedule) return "Please specify either 'Batch I' or 'Batch II'.";
    
    return `Schedule for ${batch} (Room ${schedule.room}): \n- Mon: ${schedule.monday}\n- Tue: ${schedule.tuesday}\n- Wed: ${schedule.wednesday}\n- Thu: ${schedule.thursday}\n- Fri: ${schedule.friday}`;
  },
});

export const tools = {
  getTimeTable,
};


// import { tool } from 'ai';
// import { z } from 'zod';

// //TODO TASK 2 - Tool Calling
// // Define your tools here. Each tool has a description, parameters (using Zod), and an execute function.
// // The model decides when to call a tool based on the user's message.

// export const weatherTool = tool({
//   description: 'Get the current weather for a given city',
//   parameters: z.object({
//     city: z.string().describe('The city to get weather for'),
//   }),
//   execute: async ({ city }) => {
//     // Replace with a real API call in production
//     const mockWeather: Record<string, { temp: number; condition: string }> = {
//       london: { temp: 12, condition: 'Cloudy' },
//       tokyo: { temp: 22, condition: 'Sunny' },
//       'new york': { temp: 18, condition: 'Partly cloudy' },
//     };
//     const data = mockWeather[city.toLowerCase()] ?? { temp: 20, condition: 'Unknown' };
//     return { city, temperature: data.temp, condition: data.condition };
//   },
// });
// export const getTimeTable = tool({
//   description :"Get Latest time table of various classes",
//   inputSchema : z.object({
//     class:z.int().describe("class number (between 1 and 4)"),
//     batch: z.string().describe("batch A or batch B (students from one class are divided into batch a and b)")
//   }),
//   execute: async ({ class: classNumber, batch }) => {
//     const timetable: Record<
//       number,
//       Record<string, string[]>
//     > = {
//       1: {
//         A: ["8:30-9:30 DSA", "10:30-11:30 OOP"],
//         B: ["9:30-10:30 Math", "11:30-12:30 Physics"],
//       },
//       2: {
//         A: ["8:30-9:30 DBMS", "10:30-11:30 OS"],
//         B: ["9:30-10:30 English", "11:30-12:30 Chemistry"],
//       },
//       3: {
//         A: ["8:30-9:30 Networks", "10:30-11:30 AI"],
//         B: ["9:30-10:30 History", "11:30-12:30 Geography"],
//       },
//       4: {
//         A: ["8:30-9:30 ML", "10:30-11:30 Ethics"],
//         B: ["9:30-10:30 Art", "11:30-12:30 PE"],
//       },
//     };
 
//     const classData = timetable[classNumber];
//     if (!classData) {
//       return [`No timetable found for class ${classNumber}`];
//     }
//     const batchUpper = (batch || '').toUpperCase();
//     if (!classData[batchUpper]) {
//       return [`No timetable found for class ${classNumber} batch ${batch}`];
//     }
//     return classData[batchUpper];
//   }
// })
 
// // Add more tools here and export them in the toolSet below
 
// export const tools = {
//   getWeather: weatherTool,
//   getTimeTable: getTimeTable,
// };