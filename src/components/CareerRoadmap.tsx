import React, { useMemo, useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  addEdge,
  Handle,
  Position,
  NodeProps,
  Edge,
  Node
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from 'dagre';
import { Stream, CareerPath } from '@/src/data/careers';
import { 
  GraduationCap, BookOpen, Compass, ArrowRight, CheckCircle2, 
  Cpu, Building, Plane, Ship, Stethoscope, Smile, Activity, Pill,
  Calculator, Briefcase, FileText, TrendingUp, Scale, PenTool, Brain, Mic,
  Wrench, PenTool as Tool, Search, ChevronRight, Lightbulb, Target, Users, Clock,
  Shield, FlaskConical, Leaf, Monitor, Utensils, Globe, Award, Code, Filter, X, Info
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const iconMap: Record<string, React.ElementType> = {
  Cpu, Building, Plane, Ship, Stethoscope, Smile, Activity, Pill,
  Calculator, Briefcase, FileText, TrendingUp, Scale, PenTool, Brain, Mic,
  Wrench, Tool, Shield, FlaskConical, Leaf, Monitor, Utensils, Globe, Award, Code
};

// Custom Node Components
const StreamNode = ({ data }: NodeProps) => {
  return (
    <div className="px-8 py-5 shadow-2xl rounded-full bg-slate-900 text-white border-4 border-white min-w-[220px] text-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <Handle type="source" position={Position.Right} className="w-4 h-4 !bg-blue-500 border-2 border-white" />
      <div className="relative z-10">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 mb-1">Starting Point</div>
        <div className="font-black text-xl tracking-tighter">{data.label as string}</div>
      </div>
    </div>
  );
};

const PathNode = ({ data }: NodeProps) => {
  const Icon = iconMap[data.icon as string] || GraduationCap;
  const imageUrl = data.imageUrl as string;
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="px-6 py-4 shadow-2xl rounded-3xl bg-white border-2 border-slate-100 hover:border-blue-500 transition-all duration-500 min-w-[260px] group overflow-hidden relative cursor-pointer">
          {imageUrl && (
            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <img src={imageUrl} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
          )}
          <div className="relative z-10 flex items-center gap-4">
            <Handle type="target" position={Position.Left} className="w-3 h-3 !bg-blue-500 border-2 border-white" />
            <div className="bg-slate-50 p-3 rounded-2xl text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors border border-slate-100 group-hover:border-blue-100">
              <Icon className="w-6 h-6" />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-0.5">Career Path</div>
              <div className="font-black text-slate-900 text-lg tracking-tight group-hover:text-blue-700 transition-colors leading-tight">{data.label as string}</div>
              <div className="text-[10px] text-slate-400 mt-1 font-bold uppercase tracking-widest">{data.duration as string}</div>
            </div>
            <Handle type="source" position={Position.Right} className="w-3 h-3 !bg-blue-500 border-2 border-white" />
          </div>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs p-0 overflow-hidden rounded-3xl border-none shadow-2xl bg-white">
        {imageUrl && (
          <div className="h-32 w-full relative">
            <img src={imageUrl} alt={data.label as string} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
          </div>
        )}
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 bg-blue-50 rounded-lg text-blue-600">
              <Icon className="w-4 h-4" />
            </div>
            <p className="font-black text-slate-900 tracking-tight">{data.label as string}</p>
          </div>
          <p className="text-xs text-slate-500 leading-relaxed font-medium">
            {data.description as string}
          </p>
          {data.salaryRange && (
            <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Avg. Salary</span>
              <span className="font-black text-blue-600 text-xs">{data.salaryRange as string}</span>
            </div>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
  );
};

const SkillNode = ({ data }: NodeProps) => {
  return (
    <div className="px-4 py-2.5 shadow-xl rounded-2xl bg-blue-50 border-2 border-blue-100 min-w-[140px] text-center group hover:bg-blue-600 hover:border-blue-600 transition-all duration-300">
      <Handle type="target" position={Position.Left} className="w-2 h-2 !bg-blue-300 border border-white" />
      <div className="font-black text-blue-700 text-[10px] uppercase tracking-widest group-hover:text-white transition-colors">{data.label as string}</div>
    </div>
  );
};

const OutcomeNode = ({ data }: NodeProps) => {
  return (
    <div className="px-5 py-3 shadow-xl rounded-2xl bg-emerald-50 border-2 border-emerald-100 min-w-[160px] text-center group hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300">
      <Handle type="target" position={Position.Left} className="w-2 h-2 !bg-emerald-300 border border-white" />
      <div className="font-black text-emerald-800 text-xs flex items-center justify-center gap-2 group-hover:text-white transition-colors">
        <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:text-white" />
        {data.label as string}
      </div>
    </div>
  );
};

const nodeTypes = {
  streamNode: StreamNode,
  pathNode: PathNode,
  skillNode: SkillNode,
  outcomeNode: OutcomeNode,
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'LR') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ 
    rankdir: direction, 
    nodesep: 100, 
    ranksep: 200,
    marginx: 100,
    marginy: 100
  });

  nodes.forEach((node) => {
    // Estimate node sizes based on type
    let width = 300;
    let height = 120;
    if (node.type === 'skillNode') { width = 180; height = 60; }
    if (node.type === 'outcomeNode') { width = 200; height = 60; }
    if (node.type === 'streamNode') { width = 260; height = 100; }
    
    dagreGraph.setNode(node.id, { width, height });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const newNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    const newNode = {
      ...node,
      targetPosition: isHorizontal ? Position.Left : Position.Top,
      sourcePosition: isHorizontal ? Position.Right : Position.Bottom,
      // We are shifting the dagre node position (anchor=center center) to the top left
      // so it matches the React Flow node anchor point (top left).
      position: {
        x: nodeWithPosition.x - nodeWithPosition.width / 2,
        y: nodeWithPosition.y - nodeWithPosition.height / 2,
      },
    };

    return newNode;
  });

  return { nodes: newNodes, edges };
};

interface CareerRoadmapProps {
  stream: Stream | null;
  path: CareerPath | null;
}

export default function CareerRoadmap({ stream, path }: CareerRoadmapProps) {
  const { initialNodes, initialEdges } = useMemo(() => {
    const nodes: Node[] = [];
    const edges: Edge[] = [];

    if (!stream && !path) return { initialNodes: [], initialEdges: [] };

    if (path) {
      // Show details for a specific path
      nodes.push({
        id: `path-${path.id}`,
        type: 'pathNode',
        data: { 
          label: path.title, 
          icon: path.icon, 
          duration: path.duration,
          description: path.description,
          salaryRange: path.salaryRange,
          imageUrl: path.imageUrl
        },
        position: { x: 0, y: 0 },
      });

      // Add skills
      path.skills.forEach((skill, i) => {
        const skillId = `skill-${path.id}-${i}`;
        nodes.push({
          id: skillId,
          type: 'skillNode',
          data: { label: skill },
          position: { x: 0, y: 0 },
        });
        edges.push({
          id: `e-path-${path.id}-${skillId}`,
          source: `path-${path.id}`,
          target: skillId,
          animated: true,
          style: { stroke: '#94a3b8', strokeWidth: 2 },
        });
      });

      // Add outcomes
      path.outcomes.forEach((outcome, i) => {
        const outcomeId = `outcome-${path.id}-${i}`;
        nodes.push({
          id: outcomeId,
          type: 'outcomeNode',
          data: { label: outcome },
          position: { x: 0, y: 0 },
        });
        edges.push({
          id: `e-path-${path.id}-${outcomeId}`,
          source: `path-${path.id}`,
          target: outcomeId,
          animated: true,
          style: { stroke: '#64748b', strokeWidth: 2 },
        });
      });

    } else if (stream) {
      // Show overview of a stream
      nodes.push({
        id: `stream-${stream.id}`,
        type: 'streamNode',
        data: { label: stream.title },
        position: { x: 0, y: 0 },
      });

      stream.paths.forEach((p) => {
        const pathId = `path-${p.id}`;
        nodes.push({
          id: pathId,
          type: 'pathNode',
          data: { 
            label: p.title, 
            icon: p.icon, 
            duration: p.duration,
            description: p.description,
            salaryRange: p.salaryRange,
            imageUrl: p.imageUrl
          },
          position: { x: 0, y: 0 },
        });
        edges.push({
          id: `e-stream-${stream.id}-${pathId}`,
          source: `stream-${stream.id}`,
          target: pathId,
          animated: true,
          style: { stroke: '#475569', strokeWidth: 2 },
        });
        
        // Add just a few outcomes to keep the graph manageable
        p.outcomes.slice(0, 2).forEach((outcome, i) => {
          const outcomeId = `outcome-${p.id}-${i}`;
          nodes.push({
            id: outcomeId,
            type: 'outcomeNode',
            data: { label: outcome },
            position: { x: 0, y: 0 },
          });
          edges.push({
            id: `e-path-${p.id}-${outcomeId}`,
            source: pathId,
            target: outcomeId,
            style: { stroke: '#94a3b8', strokeWidth: 1, opacity: 0.6 },
          });
        });
      });
    }

    const layouted = getLayoutedElements(nodes, edges);
    return { initialNodes: layouted.nodes, initialEdges: layouted.edges };
  }, [stream, path]);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Update layout when props change
  React.useEffect(() => {
    setNodes(initialNodes);
    setEdges(initialEdges);
  }, [initialNodes, initialEdges, setNodes, setEdges]);

  if (!stream && !path) {
    return null;
  }

  return (
    <div className="w-full h-[500px] bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-inner">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.2}
        maxZoom={1.5}
        attributionPosition="bottom-right"
        className="bg-slate-50/50"
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#cbd5e1" />
        <Controls showInteractive={false} className="bg-white border-slate-200 shadow-xl rounded-xl overflow-hidden" />
      </ReactFlow>
    </div>
  );
}
