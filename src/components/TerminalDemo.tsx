'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal, Play, RefreshCw, Copy, Check } from 'lucide-react';

const labs = [
  {
    title: 'Deploy a K8s Pod',
    lang: 'yaml',
    command: 'kubectl apply -f pod.yaml',
    code: `apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: nginx
    env: production
spec:
  containers:
  - name: nginx
    image: nginx:1.25-alpine
    ports:
    - containerPort: 80
    resources:
      requests:
        memory: "64Mi"
        cpu: "100m"
      limits:
        memory: "128Mi"
        cpu: "200m"`,
    output: `pod/nginx-pod created
✓ Waiting for pod to be ready...
✓ Pod Status: Running (2s)
✓ IP: 10.244.0.5
✓ Node: worker-node-1`,
  },
  {
    title: 'Terraform AWS EC2',
    lang: 'hcl',
    command: 'terraform apply -auto-approve',
    code: `resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0"
  instance_type = "t3.micro"

  tags = {
    Name        = "AutomateAllOps-Web"
    Environment = "production"
    ManagedBy   = "Terraform"
  }

  vpc_security_group_ids = [
    aws_security_group.web_sg.id
  ]

  user_data = file("userdata.sh")
}`,
    output: `Plan: 3 to add, 0 to change, 0 to destroy.
aws_security_group.web_sg: Creating...
aws_security_group.web_sg: Creation complete (3s)
aws_instance.web: Creating...
aws_instance.web: Creation complete (28s)
Apply complete! Resources: 3 added.`,
  },
  {
    title: 'GitHub Actions CI',
    lang: 'yaml',
    command: 'git push origin main',
    code: `name: CI/CD Pipeline
on:
  push:
    branches: [main]

jobs:
  build-test-deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Run Tests
      run: npm test
    - name: Build Docker Image
      run: docker build -t app:\${{ github.sha }} .
    - name: Push to Registry
      run: docker push gcr.io/project/app:\${{ github.sha }}
    - name: Deploy to K8s
      run: kubectl set image deploy/app app=$IMAGE`,
    output: `✓ Checkout (1s)
✓ Run Tests — 42 passed (18s)
✓ Build Docker Image (34s)
✓ Push to Registry (12s)
✓ Deploy to K8s — rollout complete
🚀 Deployed: v2.4.1 → production`,
  },
];

export default function TerminalDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [output, setOutput] = useState('');
  const [running, setRunning] = useState(false);
  const [copied, setCopied] = useState(false);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const currentLab = labs[activeTab];

  const runCommand = () => {
    if (running) return;
    setRunning(true);
    setOutput('');
    const lines = currentLab.output.split('\n');
    lines.forEach((line, i) => {
      setTimeout(() => {
        setOutput((prev) => prev + line + '\n');
        if (i === lines.length - 1) setRunning(false);
      }, i * 400);
    });
  };

  const copyCode = () => {
    navigator.clipboard.writeText(currentLab.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section ref={ref} className="relative py-24 bg-[#020817]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-900/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm mb-4">
              <Terminal className="w-4 h-4" />
              Live Interactive Labs
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
              Learn by{' '}
              <span className="gradient-text">Doing</span>
            </h2>
            <p className="text-slate-400 text-lg mb-6">
              No VMs to set up. No downloads. Launch a real Kubernetes cluster, Terraform environment,
              or CI/CD pipeline in seconds — right inside your browser.
            </p>
            <ul className="space-y-3">
              {[
                'Real cloud sandboxes that reset automatically',
                'Guided step-by-step challenges with hints',
                'Leaderboard & XP for completed labs',
                '500+ labs across 40+ DevOps tools',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-cyan-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right: terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 rounded-2xl blur-xl" />

            <div className="relative glass rounded-2xl overflow-hidden border border-white/10">
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <Terminal className="w-4 h-4 text-slate-500 mx-2" />
                <span className="text-slate-400 text-xs font-mono">AutomateAllOps — interactive lab</span>
              </div>

              {/* Tabs */}
              <div className="flex border-b border-white/5">
                {labs.map((lab, i) => (
                  <button
                    key={lab.title}
                    onClick={() => { setActiveTab(i); setOutput(''); }}
                    className={`flex-1 text-xs py-2 px-2 font-mono transition-all ${
                      activeTab === i
                        ? 'text-cyan-400 bg-cyan-500/10 border-b-2 border-cyan-400'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {lab.title}
                  </button>
                ))}
              </div>

              {/* Code area */}
              <div className="relative">
                <button
                  onClick={copyCode}
                  className="absolute top-3 right-3 z-10 p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
                </button>
                <pre className="p-4 text-xs font-mono text-slate-300 overflow-x-auto max-h-52 bg-black/30 leading-relaxed">
                  <code>{currentLab.code}</code>
                </pre>
              </div>

              {/* Command bar */}
              <div className="flex items-center gap-2 px-4 py-2 bg-black/40 border-t border-white/5">
                <span className="text-green-400 font-mono text-xs">$</span>
                <span className="text-slate-300 font-mono text-xs flex-1">{currentLab.command}</span>
                <button
                  onClick={runCommand}
                  disabled={running}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    running
                      ? 'bg-white/5 text-slate-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-violet-600 text-white hover:shadow-lg hover:shadow-cyan-500/20'
                  }`}
                >
                  {running ? <RefreshCw className="w-3 h-3 animate-spin" /> : <Play className="w-3 h-3" />}
                  {running ? 'Running...' : 'Run'}
                </button>
              </div>

              {/* Output */}
              <AnimatePresence mode="wait">
                {output && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-black/50 border-t border-white/5"
                  >
                    <pre className="text-xs font-mono text-green-400 leading-relaxed whitespace-pre-wrap">
                      {output}
                      {running && <span className="cursor-blink">▋</span>}
                    </pre>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
