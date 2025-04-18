import { Card, Cards } from "fumadocs-ui/components/card";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      {/* Hero */}
      <section className="text-center py-20">
        <div className="container mx-auto px-6">
          <Image
            src={"/images/android-sunset-icon.png"}
            width={512}
            height={512}
            alt="icon"
            className="text-center mx-auto"
          />
          <h1 className="text-7xl text-fd-primary font-extrabold mb-4">
            Android Notes by Me
          </h1>
          <p className="text-xl text-fd-secondary-foreground mb-6">
            Who am I? You don&apos;t need to know that.
          </p>
          <Link
            href="/docs"
            className="dark:hover:bg-fd-primary dark:hover:text-fd-primary-foreground dark:text-white px-8 py-3 rounded-lg text-lg dark:bg-fd-primary-foreground mt-5 transition-all bg-fd-accent hover:bg-fd-primary hover:text-white text-fd-primary-foreground">
            Go to docs
          </Link>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-6">
          <Cards>
            <Card
              title="Kotlin OOP"
              description="Encapsulation, inheritance, polymorphism & abstraction for Android classes"
              icon={"📐"}
              draggable
            />
            <Card
              title="Kotlin Functions"
              description="Declarative, higher‑order & extension functions in Android code"
              icon="🔧"
              draggable
            />
            <Card
              title="Coroutines & Flows"
              description="Suspend, launch & Flow streams for async tasks in Android"
              icon="🚀"
              draggable
            />
            <Card
              title="Conditionals & Loops"
              description="if/when and for/while constructs for Kotlin control flow"
              icon="🔁"
              draggable
            />
            <Card
              title="Arrays & Lists"
              description="Fixed & dynamic collections: Array, List, Set, Map usage"
              icon="📋"
              draggable
            />
            <Card
              title="Compose Basics"
              description="Composable functions, state & modifiers for UI in Jetpack Compose"
              icon="🎨"
              draggable
            />
          </Cards>
        </div>
      </section>
    </main>
  );
}
