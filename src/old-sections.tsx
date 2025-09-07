import { Utensils, Mountain, Gift, Ghost, Home, Lock } from 'lucide-react';

export const sections = [
    {
      id: 1,
      title: "Escape Room",
      subtitle: "Mind-Bending Team Challenges",
      content: "Time to test our collective brain power! Let's dive into themed escape rooms where we'll solve puzzles, crack codes, and hopefully not panic when the clock hits 10 minutes. Will we escape or will we be trapped forever in awkward silence?",
      icon: Lock,
      theme: "from-red-600 to-orange-600",
      bgGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDd5cWE4dHRvZWNnbGJxNmVyOXF1c2VtN3BqYjRvY3N0bzJ2YnVveCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7abKhOpu0NwenH3O/giphy.gif",
      imageLayout: "scattered",
      images: [
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
      ]
    },
    {
      id: 2,
      title: "Fall Foliage Hike",
      subtitle: "Nature's Golden Hour",
      content: "Lace up those hiking boots! We're chasing the perfect autumn colors on trails that'll make our Instagram followers jealous. Think golden leaves, crisp air, and that perfect photo op where we all pretend we're not out of breath.",
      icon: Mountain,
      theme: "from-orange-500 to-yellow-500",
      bgGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDNxaGQzYzRkZHM4cjJ4dGF6YWpnaG1xcjJzY3p6YXpqbXo1YWw5ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlNQ03J5JxX6lva/giphy.gif",
      imageLayout: "carousel",
      images: [
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600"
      ]
    },
    {
      id: 3,
      title: "Fall Cabin Staycation",
      subtitle: "Cozy Vibes & Good Times",
      content: "Picture this: a rustic cabin, crackling fireplace, hot cocoa in oversized mugs, and zero cell service (okay, maybe some cell service). Board games, ghost stories, and that one person who insists on making s'mores indoors.",
      icon: Home,
      theme: "from-amber-600 to-orange-700",
      bgGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjFpZnlyYWQ4azNvbzNnN2dvdGN0ZmM4bWh1a3k3NWR5dTFsaG96NCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT9IgG50Fb7Mi0prBC/giphy.gif",
      imageLayout: "grid",
      images: [
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",
        "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400",
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400"
      ]
    },
    {
      id: 4,
      title: "Friendsgiving",
      subtitle: "Gratitude & Gluttony",
      content: "Forget family drama - this is our chosen family feast! Everyone brings a dish (yes, store-bought counts), we'll argue about who makes the best stuffing, and create new traditions that definitely involve way too much food and even more laughter.",
      icon: Utensils,
      theme: "from-orange-400 to-red-500",
      bgGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHF6anFxZG14dmY2M3JsbXpxOWlqNnVwcTJ4OXEzbnZ6Mmt4OW9qdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0HlHJGHe3yAMhdQY/giphy.gif",
      imageLayout: "masonry",
      images: [
        "https://images.unsplash.com/photo-1574972731812-734c4c71a0de?w=400",
        "https://images.unsplash.com/photo-1607946948726-47f0e4534095?w=300",
        "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?w=500"
      ]
    },
    {
      id: 5,
      title: "Halloween",
      subtitle: "Spooks & Spectacular Costumes",
      content: "Time to embrace our inner weirdos! Whether we're hitting up haunted houses, having a costume contest, or just eating way too much candy while watching horror movies, we're going all out. Group costume coordination is mandatory!",
      icon: Ghost,
      theme: "from-purple-600 to-orange-500",
      bgGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzE0aWh2M3JkZTdkdHZ1c2c5YjRhc2xvZXYwMTBrNDJyYjE2M2NoaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f4bQAOKwmU8OWemSF1/giphy.gif",
      imageLayout: "floating",
      images: [
        "https://images.unsplash.com/photo-1509557965043-36e818017d81?w=400",
        "https://images.unsplash.com/photo-1571328007932-80b24fdeca5f?w=400",
        "https://images.unsplash.com/photo-1603912451204-caffa5616cc1?w=400"
      ]
    },
    {
      id: 6,
      title: "Christmas Gift Giving",
      subtitle: "Holiday Magic & Secret Santas",
      content: "The grand finale! Secret Santa reveals, white elephant gift exchanges, and that warm fuzzy feeling when someone actually loves your gift. We'll make it memorable with thoughtful presents, ugly sweaters, and enough hot chocolate to power a small village.",
      icon: Gift,
      theme: "from-red-500 to-green-500",
      bgGif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGtuMTJ1Zml6aDJpaG5nZzdpcmdoMDE5N2FsM2s1azg3cnloZWc0cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6fJ5LANL0x31R1Ic/giphy.gif",
      imageLayout: "spiral",
      images: [
        "https://images.unsplash.com/photo-1512909006721-3d6018887383?w=400",
        "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=400",
        "https://images.unsplash.com/photo-1607344645866-009c7d7a7705?w=400",
        "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400"
      ]
    }
  ]